class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Reverse a linked list
  // Big O - Time: O(n), Space: O(1)
  // Time complexity is O(n) because we have to iterate through the list to reverse it
  // Space complexity is O(1) because we are not creating any new data structures
  reverse() {
    // If there is no head, return null
    if (!this.head) return null;
    // Set a variable to be the head of the list
    let current = this.head;
    // Set the head to be the tail
    this.head = this.tail;
    // Set the tail to be the current node
    this.tail = current;
    // Set a variable to be the next node
    let next = null;
    // Set a variable to be the previous node
    let prev = null;

    // Iterate through the list until the tail is reached
    for (let i = 0; i < this.length; i++) {
      // Set the next variable to be the next node
      next = current.next;
      // Set the current node's next to be the previous node
      current.next = prev;
      // Set the previous node to be the current node
      prev = current;
      // Set the current node to be the next node
      current = next;
    }
    // Return the list
    return this;
  }

  print() {
    const list = [];
    let current = this.head;
    while (current) {
      list.push(current.val);
      current = current.next;
    }

    return list;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list.print());
console.log(list.reverse().print());
