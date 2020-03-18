// Node Class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// DoublyLinkedList
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Push
  push(value) {
    // Create a new node with the value passed to the function
    const newNode = new Node(value);
    // If the head property is null set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If not, set the  next property on the tail to be that node
      this.tail.next = newNode;
      // Set the previous property on the newly created node to be the tail
      newNode.prev = this.tail;
      // Set the tail to be the newly created node
      this.tail = newNode;
    }
    // Increment the length
    this.length++;
    // Return the Doubly Linked List
    return this;
  }
}

const newList = new DoublyLinkedList();
