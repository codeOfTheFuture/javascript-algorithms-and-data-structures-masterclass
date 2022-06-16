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

  // Insert a node at a specific position
  // Big O - Time: O(n), Space: O(1)
  // Time complexity is O(n) because we have to iterate through the list to find the node at the index k
  // Space complexity is O(1) because we are not creating any new data structures
  insert(index, val) {
    // If the index is less than zero or greater than or equal to the length of the list, return false
    if (index < 0 || index > this.length) return false;
    // Create a new node with the value passed to the function
    const newNode = new Node(val);
    // If the index is 0, set the new node to be the head of the list
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // Set a variable to be the head of the list
      let current = this.head;
      // Loop through the list until the index is reached
      for (let i = 0; i < index - 1; i++) {
        // Set the current variable to be the next node
        current = current.next;
      }
      // Set the next node of the node before the index to be the new node
      newNode.next = current.next;
      // Set the next node of the node before the index to be the new node
      current.next = newNode;
    }
    // Increment the length of the list
    this.length++;
    // Return true
    return true;
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

console.log(list.insert(0, 0));
console.log(list.print());
console.log(list.insert(6, 6));
console.log(list.print());
console.log(list.insert(2, 2));
console.log(list.print());
console.log(list.insert(-5, 0));
console.log(list.insert(100, 0));
