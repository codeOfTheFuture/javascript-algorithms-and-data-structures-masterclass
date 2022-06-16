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

  // Unshift a node to the front of the list
  // Big O - Time: O(1), Space: O(1)
  // Time complexity is O(1) because we only have to access the head and tail
  // Space complexity is O(1) because we are not creating any new data structures
  unshift(val) {
    // Create a new node
    const newNode = new Node(val);
    // If there is no head, set the head and tail to be the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // Otherwise set the next property on the new node to be the current head and set the head property on the list to be the new node
      newNode.next = this.head;
      this.head = newNode;
    }
    // Increment the length by one
    this.length++;
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

console.log(list.unshift(0));
console.log(list.unshift(10));
console.log(list.unshift(-4));

console.log(list.print());
