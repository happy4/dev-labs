class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Array.unshift() - insert into the begining
  push(val) {
    const node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      const prevNode = this.head;
      this.head = node;
      this.head.next = prevNode;
    }
    return ++this.length;
  }

  // Array.shift() - remove from the begining
  pop() {
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

const x = new Stack();
x.push(1);
x.push(2);
x.push(3);

console.log(x.pop());
console.log(x.pop());
console.log(x.pop());
console.log(x.pop());


