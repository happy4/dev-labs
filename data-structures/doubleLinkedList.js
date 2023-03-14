class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    const oldTail = this.tail;
    this.tail = newNode;
    this.tail.prev = oldTail;
    this.tail.prev.next = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return poppedNode;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    poppedNode.prev = null;
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return oldHead;
    }
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    const oldHead = this.head;
    oldHead.prev = newNode;
    this.head = newNode;
    this.head.next = oldHead;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || this.length === 0) return -1;
    const mid = Math.floor(this.length / 2);
    if (index <= mid) {
      let current = this.head;
      let counter = 0;
      while (current) {
        if (index === counter) {
          return current;
        }
        current = current.next;
        counter++;
      }
    } else {
      let current = this.tail;
      let counter = this.length - 1;
      while (current) {
        if (index === counter) {
          return current;
        }
        current = current.prev;
        counter--;
      }
    }
    return -1;
  }

  set(value, index) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(value, index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
      this.unshift(value);
    }
    else if (index === this.length - 1) {
      this.push(value);
    } else {
      let prevNode = this.get(index - 1);
      if (prevNode) {
        const newNode = new Node(value);
        newNode.next = prevNode.next;
        newNode.prev = prevNode;
        prevNode.next.prev = newNode;
        prevNode.next = newNode;
        this.length++;
      }
    }
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    const node = this.get(index);
    if (index === 0) {
      this.shift();
    }
    else if (index === this.length - 1) {
      this.pop();
    } else {
      if (node) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
        node.next = null;
        node.prev = null;
        this.length--;
      }
    }
    console.log('this', this);
    return node;
  }
}

const dll = new DoubleLinkedList();
console.log(dll.push(1));
console.log(dll.push(2));
// console.log(dll.push(3));

// dll.pop();
// dll.pop();
// dll.pop();

// dll.shift();
// dll.shift();
// dll.shift();

// dll.unshift(5);
// dll.unshift(6);
// dll.unshift(7);

// console.log(dll.set(20, 0));

// console.log(dll.insert(20, 1));
// console.log(dll.remove(0));




