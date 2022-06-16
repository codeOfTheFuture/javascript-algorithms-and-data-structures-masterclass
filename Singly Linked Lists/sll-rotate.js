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

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.val;
  }

  // Rotate by any integer number of nodes
  // Ex: rotate(2) would rotate the list to the right by two nodes, so the head would be the node at index 2

  // Ex: rotate(-2) would rotate the list to the left by two nodes, so the head would be the node at index length - 2
  // Big O - Time: O(n), Space: O(1)
  // Time complexity is O(n) because we have to iterate through the list to find the node at the index k
  // Space complexity is O(1) because we are not creating any new data structures
  rotate(k) {
    if (k === 0) return this;
    if (k < 0) k = this.length + k;

    let current = this.head;
    let count = 1;
    while (count < k && current !== null) {
      current = current.next;
      count++;
    }

    if (current === null) return this;

    let newHead = current;

    while (current.next !== null) current = current.next;

    current.next = this.head;

    this.head = newHead.next;

    newHead.next = null;

    return this;
  }

  print() {
    const list = [];
    let current = this.head;
    while (current !== null) {
      list.push(current.val);
      current = current.next;
    }
    return list;
  }
}

const list = new SinglyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);

console.log(list.get(2)); // World
console.log(list.get(0)); // Hello
console.log(list.get(1));

console.log(list.rotate(2));
console.log(list.print());
