class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList{
  constructor(){
    this.length =0;
    this.head=null;
    this.tail = null;
  }

  push(val){

    var newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;

  }

  pop(){
    if(!this.head) return undefined;

    var current = this.head;
    var newTail = current;

    while(current.next){
      newTail = current ;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if(this.head == this.tail){
      this.head = null;
      this.tail = null;
    }
    return current;

  }

  shift(){

    if(!this.head) return undefined;

    var current = this.head;
    this.head = current.next;
    // current.next = null;
    this.length --;
    if(this.length ==0){
      this.tail = null;
    }
    return current;
  }

  unshift(val){

    let newHead = new Node(val);

    if(!this.head){
      this.head = newHead;
      this.tail = newHead;

    } else {
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;

    return this;

  }

  get(index){
    if(index <0 || index >= this.length ) return null;
    let counter=0;
    let current = this.head;
    while(counter != index){
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index,val){

    let currentNode = this.get(index);
    if(currentNode){
      currentNode.val = val;
      return true;
    }
    return false;
  }

  insert(index,val){

    if(index < 0 || index > this.length) return false;
    if(index == this.length) return !!this.push(val);
    if(index == 0) return !!this.unshift(val);

    let prevNode = this.get(index-1);
    let newNode = new Node(val);
    newNode.next = prevNode.next;
    prevNode.next =  newNode;
    this.length++;
    return true;
  }

  remove(index){

    if(index < 0 || index > this.length) return false;
    if(index == this.length -1) return !!this.pop();
    if(index == 0) return !!this.shift();

    let prevNode = this.get(index-1);
    let currentNode = this.get(index);
    prevNode.next = currentNode.next;
    this.length--;
    return currentNode;
  }

  reverse(){
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev =null;
    let next;

    for(let i=0 ; i < this.length ; i++){
      next = node.next;
      node.next = prev;
      prev=node;
      node = next;
    }
    return this;

  }


}
