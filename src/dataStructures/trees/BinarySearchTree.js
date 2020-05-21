

class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(value){
    let newNode = new Node(value);
    if(this.root == null){
      this.root = newNode;
      return this;
    } else {
        let current = this.root;
        while(true){
          if(value === current.value) return undefined;
          if(value < current.value){
            if(current.left == null){
              current.left = newNode;
              return this;
            } else{ current = current.left;}
          } else if(value > current.value){
            if(current.right == null){
              current.right = newNode;
              return this;
            } else { current = current.right;}
          }
        }
    }
  }


// reutrn boolean exists or not
  find(value){
    if(this.root === null) return false;
    var current = this.root;
    var nodeFound = false;

    while(current && !nodeFound){
      if(value < current.value){
        current = current.left;
      } else if( value > current.value){
        current = current.right;
      } else {
        nodeFound = true;
      }
    }
    return nodeFound ? nodeFound : false;
  }


}
