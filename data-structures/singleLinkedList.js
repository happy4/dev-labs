class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;

    if (this.tail === null) {
      this.head = null;
      return null;
    }

    let prevTail = null;
    let currentNode = this.head;

    while (currentNode.next !== null) {
      prevTail = currentNode;
      currentNode = currentNode.next;
    }

    if (prevTail) {
      prevTail.next = null;
    }

    this.tail = prevTail;
    this.length--;

    return currentNode;
  }

  shift() {
    if (!this.head) {
      this.tail = null;
      return null;
    }

    const resutl = this.head;
    this.head = this.head.next;
    this.length--;

    return resutl;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const prevHead = this.head;
      this.head = newNode;
      this.head.next = prevHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    let currentNode = this.head;
    let i = 0;

    while (currentNode) {
      if (i === index) {
        break;
      }
      i++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  set(val, index) {
    let currentNode = this.head;
    let i = 0;

    while (currentNode) {
      if (i === index) {
        currentNode.val = val;
        break;
      }
      i++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  insert(val, index) {
    const newNode = new Node(val);

    let currentNode = this.head;
    let i = 0;

    let prevNode;
    while (currentNode) {
      if (i + 1 === index) {
        prevNode = currentNode;
      }
      if (i === index) {
        if (prevNode) {
          prevNode.next = newNode;
        }
        newNode.next = currentNode;
        if (index === 0) {
          this.head = newNode;
        }
        this.length++;
        break;
      }
      i++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  remove(index) {
    let currentNode = this.head;
    let i = 0;
    let prevNode;

    while (currentNode) {
      if (i + 1 === index) {
        prevNode = currentNode;
      }
      if (i === index) {
        prevNode.next = currentNode.next;
        this.length--;
      }
      i++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  // a -> b -> c => c -> b -> a
  reverse() {
    let currentNode = this.head;

    [this.tail, this.head] = [this.head, this.tail];

    let prevNode = null;

    while (currentNode) {
      const nextNode = currentNode.next; //c
      currentNode.next = prevNode; // b.next = a;
      prevNode = currentNode; // b
      currentNode = nextNode;  // c
    }

    return this;
  }

  traverse() {
    console.log('head: ', this.head.val);
    console.log('tail: ', this.tail.val);
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val, currentNode.next);
      currentNode = currentNode.next;
    }
  }
}

let list = new SingleLinkedList();
list.push('a');
list.push('b');
list.push('c');
list.push('d');

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());

// console.log(list.unshift(1));
// console.log(list.unshift(2));
// console.log(list.unshift(3));
// console.log(list.unshift(4));
// console.log(list.unshift(5));

// console.log(list.get(1));
// console.log(list.get(2));
// console.log(list.get(3));
// console.log(list.get(4));
// console.log(list.get(0));

// console.log(list.set('e', 1));
// console.log(list.set('r', 13));

// console.log(list.insert('e', 0));
// console.log(list.insert('l', 2));
// console.log(list.insert('w', 3));
// console.log(list.insert('r', 13));

// list.remove(2);
// list.remove(1);

list.reverse();

list.traverse();
// console.log('head: ', list.head, 'tail: ', list.tail);
// console.log(list.head.next);
// console.log(list.head.next.next);