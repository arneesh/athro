
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}


class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val){
    let newNode = new Node(val);

    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      let currentNode = this.first;
      newNode.next = currentNode;
      this.first = newNode;
    }
    return++this.size;

  }

  pop(){
    if(!this.first) return null;
    var temp = this.first;
    if(this.first === this.last){
        this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }

  top(){
    if(!this.first) return null;
    return this.first.val;
  }

  isEmpty(){
    if(!this.first) return true;
    return false;
  }


}
