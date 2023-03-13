class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Array.push() - insert into the end
  enqueue(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return ++this.length;
  }

  //Array.shift() - remove from the begining
  dequeue() {
    if (this.length === 0) {
      return null;
    }
    const prevNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = prevNode.next;
    }
    this.length--;
    return prevNode.val;
  }
}

const x = new Queue();
x.enqueue(1);
x.enqueue(2);
x.enqueue(3);

console.log(x.dequeue());
console.log(x.dequeue());
console.log(x.dequeue());
