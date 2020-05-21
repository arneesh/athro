

class Node{
  constructor(val){
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}


class DoublyLinkedList{
  constructor(){
    this.head =  null;
    this.tail = null;
    this.length =0;
  }

  push(val){

    let newNode = new Node(val);

    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){

    if(!this.head) return undefined;
    let currentTail = this.tail;
    if(this.length ===1){
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null
       // let prevNode = this.tail.prev;
       // prevNode.next = null;
       // this.tail = prevNode;
       // currentTail.prev = null;
    }
    this.length--;
    return currentTail;
  }

  shift(){
    if(!this.head) return undefined;
    let oldHead = this.head;
    if(this.length ==1){
      this.head = null;
      this.tail =null;
    } else {
      let newHead = oldHead.next;
      newHead.prev=null;
      oldHead.next = null;
      this.head = newHead;
    }
    this.length--;
    return oldHead;
  }

  unshift(val){

    var newHead = new Node(val);
    if(!this.head){
      this.head = newHead;
      this.tail = newHead;
    } else {
      let oldHead = this.head;
      newHead.next = oldHead;
      oldHead.prev = newHead;
      this.head = newHead;
    }
    this.length++;
    return newHead;
  }

  get(index){

    // if(index === undefined) return {error:'Invalid Input', message:'Index needs an integer value to obtain the result, recieved undefined instead'};
    // if(typeof(index)=== 'string') return {error:'Invalid Input', message:'Index must be an integer but recieved string'};
    // if(index % 1 !== 0) return {error:'Invalid Input', message:'Index must be an integer but recieved decimal value'};

    if(index === undefined) return null;
    if(typeof(index)=== 'string') return  null;
    if(index % 1 !== 0) return null;


    if( index < 0 || index >= this.length ) return null;
    let mid = Math.floor(this.length/2);

    var counter,current;

    if(index <= mid){
       counter=0;
       current = this.head;
      while(counter != index){
        current  = current.next;
        counter++;
      }
    } else {
      counter = this.length -1;
     current = this.tail;
      while(counter != index){
        current = current.prev;
        counter--;
      }
    }
    return current;
  }

  set(index,val){
    let nodeToUpdate = this.get(index);

    if(nodeToUpdate !== null){
      nodeToUpdate.val = val;
      return true;
    }
    return false;
  }

  insert(index,val){

    if(index < 0 || index > this.length) return undefined;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index-1);
    var afterNode = beforeNode.next;

    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index){

    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return !!this.shift();
    if(index === this.length -1) return !!this.pop();

    let removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }


}
