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

  // Pop
  pop() {
    // If there is no head, return undefined
    if (!this.head) return undefined;
    // Store the current tail in a variable to return later
    const poppedNode = this.tail;
    // If the length is 1, set the head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Update the tail to be the previous node.
      this.tail = this.tail.prev;
      // Set the new tail's next to null
      this.tail.next = null;
      // Set the old tail's prev to null
      poppedNode.prev = null;
    }
    // Decrement the length
    this.length--;
    // return the value removed
    return poppedNode;
  }

  // Shift
  shift() {
    // If length is 0, return undefined
    if (!this.head) return undefined;
    // Store the current head property in a variable (we'll call it old head)
    const oldHead = this.head;
    // If the length is one
    if (this.length === 1) {
      // Set the head to be null
      this.head = null;
      // Set the tail to be null
      this.tail = null;
    } else {
      // Update the head to be the next of the old head
      this.head = oldHead.next;
      // Set the head's prev property to null
      this.head.prev = null;
      // Set the old head's next to null
      oldHead.next = null;
    }
    // Decrement the length
    this.length--;
    // Return old head
    return oldHead;
  }

  // Unshift
  unshift(value) {
    // Create a new node with the value passed to the function
    const newNode = new Node(value);
    // If the length is 0
    if (this.length === 0) {
      // Set the head to be the new node
      this.head = newNode;
      // Set the tail to be the new node
      this.tail = newNode;
    } else {
      // Otherwise
      // Set the prev property on the head of the list to be the new node
      this.head.prev = newNode;
      // Set the next property on the new node to be the head property
      newNode.next = this.head;
      // Update the head to be the new node
      this.head = newNode;
    }
    // Increment the length
    this.length++;
    // Return the list
    return this;
  }

  // Get
  get(index) {
    // If the index is less than 0 or equal to the length, return undefined
    if (index < 0 || index >= this.length) return undefined;
    let count, current;
    // If the index is less than or equal to half the length of the list
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      // Loop through the list starting from the head and loop towards the middle
      while (count !== index) {
        current = current.next;
        count++;
      }
      // Return the node once it is found
      return current;
    } else {
      // If the index is greater than half the length of the list
      count = this.length - 1;
      current = this.tail;
      // Loop through the list starting from the tail and loop towards the middle
      while (count !== index) {
        current = current.prev;
        count--;
      }
      // Return the node once it is found
      return current;
    }
  }

  // Set
  set(value, index) {
    // Create a variable which is the result of the get method at the index passed to the function
    let node = this.get(index);

    // If the get method returns a valid node, set the value of that node to be the value passed to the function
    if (node !== null) {
      node.value = value;
      // Return true
      return true;
    }
    // Otherwise, return false
    return false;
  }

  // Insert
  insert(value, index) {
    // If the index is less than zero or greater than or equal to the length return false
    if (index < 0 || index > this.length) return false;
    // If the index is 0, unshift
    if (index === 0) return !!this.unshift(value);
    // If the index is the same as the length, push
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    // Use the get method to access the index - 1
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    // Set the next and prev properties on the correct nodes to link everything together
    (newNode.prev = prevNode), (prevNode.next = newNode);
    (nextNode.prev = newNode), (newNode.next = nextNode);
    // Increment the length
    this.length++;
    // Return true
    return true;
  }
}

const newList = new DoublyLinkedList();
