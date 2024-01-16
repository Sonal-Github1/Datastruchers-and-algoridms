class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  appendNode(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;// this line of code itarate thorugh the node to find a not null
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  printList() {
    let currentNode = this.head;
    while (currentNode) {
      process.stdout.write(`${currentNode.data} -> `);//console.log(currentNode.data); this can be use
      currentNode = currentNode.next;
    }
    console.log("NULL");
  }
}

// Testing the linked list
let myLinkedList = new LinkedList();

myLinkedList.appendNode(5);
myLinkedList.appendNode(11);
myLinkedList.appendNode(7);

myLinkedList.printList(); // Output: 5 -> 11 -> 7 -> NULL


// Stack Data structhure
class Stack {
  constructor() {
    this.items = [];
  }

  // Push element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Pop element from the stack


  // Peek at the top element of the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Print the stack elements
  printStack() {
    console.log(this.items);
  }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack elements:");
stack.printStack();

console.log("Top element:", stack.peek());

console.log("Popped element:", stack.pop());
console.log("Stack size:", stack.size());


//queue data strunchere
class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the back of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow"; // Queue is empty
    }
    return this.items.shift();
  }

  // Return the front element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the number of elements in the queue
  size() {
    return this.items.length;
  }

  // Print the elements of the queue
  printQueue() {
    console.log(this.items);
  }
}

// Example usage
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue elements:");
queue.printQueue();

console.log("Front element:", queue.front());

console.log("Dequeued element:", queue.dequeue());
console.log("Queue size:", queue.size());

// Binery tree data structhure

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the binary tree
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertRecursive(this.root, newNode);
    }
  }

  // Helper function to insert recursively
  _insertRecursive(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertRecursive(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertRecursive(node.right, newNode);
      }
    }
  }

  // Search for a value in the binary tree
  search(value) {
    return this._searchRecursive(this.root, value);
  }

  // Helper function to search recursively
  _searchRecursive(node, value) {
    if (node === null) {
      return false;
    }
    if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this._searchRecursive(node.left, value);
    } else {
      return this._searchRecursive(node.right, value);
    }
  }
}

// Example usage
const binaryTree = new BinaryTree();

binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(8);
binaryTree.insert(1);
binaryTree.insert(4);

console.log("Search 4:", binaryTree.search(4));
console.log("Search 10:", binaryTree.search(10));

const Name = "sonal";
const revers = Name.split('').reverse().join('');
console.log(revers)