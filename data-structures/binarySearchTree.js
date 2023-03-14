class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) break;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
          continue;
        }
      }
      else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
          continue;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) {
      return null;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return current;
      if (value < current.value) {
        if (!current.left) return null;
        else {
          current = current.left;
          continue;
        }
      }
      if (value > current.value) {
        if (!current.right) return null;
        else {
          current = current.right;
          continue;
        }
      }
    }
  }
}

  //     10
  //   6     15
  //  3 8      20
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);

// console.log(bst);
// console.log(bst.find(21));

// BFS -> [10, 5, 21, 3, 6, 20, 23, 25]

function BFS(tree) {
  const data = [];
  const queue = [];
  queue.push(tree.root);
  while(queue.length > 0) {
    const node = queue.shift();
    data.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return data;
}

// console.log(BFS(bst));

function DFS(tree) {
  const data = [];
  let current = tree.root;

  const traverse = (node) => {
    if (!node) return;
    data.push(node.value);
    if (current.left) traverse(node.left);
    if (current.right) traverse(node.right)
  }

  traverse(current);

  return data;
}

console.log(DFS(bst));


