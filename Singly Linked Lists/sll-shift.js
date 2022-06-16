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

  // Shift the first node off the list and return its value
  // Big O - Time: O(1), Space: O(1)
  // Time complexity is O(1) because we only have to access the head and tail
  // Space complexity is O(1) because we are not creating any new data structures
  shift() {
    // If there are no nodes in the list, return undefined
    if (!this.head) return undefined;
    // Create a variable to store the current node
    let current = this.head;
    // Set the head to be the next node
    this.head = current.next;
    // Decrement the length by one
    this.length--;
    // If there is one item in the list set the head and tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // Return the value of the node removed
    return current;
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

console.log(list.shift());
console.log(list.print());
console.log(list.shift());
console.log(list.print());
console.log(list.shift());
console.log(list.print());
console.log(list.shift());
console.log(list.print());
console.log(list.shift());
console.log(list.print());
console.log(list.shift());
