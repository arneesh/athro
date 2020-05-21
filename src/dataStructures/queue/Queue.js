class Node{
  constructor(val){
    this.next = null;
    this.val = val;
  }
}



class Queue{
  constructor(){
    this.front= null;
    this.rear = null;
    this.size = 0;
  }


  enqueue(val){

    var newNode = new Node(val);

    if(!this.front){
      this.front = newNode;
      this.rear = newNode;
    } else {

      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
    return newNode;
  }

  dequeue(){
    if(!this.front) return null;
    var currentFront = this.front;

    if(this.front == this.rear){
      this.rear = null;
    }
    this.front = this.front.next;
    this.size--;
    return currentFront.val;
  }

  peek(){
    if(!this.front) return null;
    return this.front.val;
  }

  isEmpty(){
    if(!this.front) return true;
    return false;
  }

}
