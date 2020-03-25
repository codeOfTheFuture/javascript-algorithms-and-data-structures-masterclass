class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert
  insert(value) {
    // Create a new node
    const newNode = new Node(value);
    // Starting at the root
    if (!this.root) {
      // Check if there is a root, if not - the root now becomes that new node
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        //If there is a root, check if the value of the new node is greater than or less than the value of the root
        if (value < current.value) {
          // If it is greater
          // Check to see if there is a node to the right
          if (current.left === null) {
            // If there is not, add that node as the right property
            current.left = newNode;
            return this;
          } else {
            // If there is, move to that node and repeat these steps
            current = current.left;
          }
        } else {
          // If it is less
          // Check to see if there is a node to the left
          if (value > current.value) {
            if (current.right === null) {
              // If there is not, add that node as the left property
              current.right = newNode;
              return this;
            } else {
              // If there is, move to that node and repeat these steps
              current = current.right;
            }
          }
        }
      }
    }
  }

  // Find

  // Starting at the root
  // Check if there is a root, if not - we're done searching
  // If there is a root, check if the value of the new node is the value we are looking for.
  // If it is the node, we're done.
  // If not, check to see if the value is greater than or less than the value of the root
  // If it is greater
  // Check to see if there is a node to the right
  // If there is, move to that node and repeat these steps
  // If there is not, we're done searching
  // If it is less
  // Check to see if there is a node to the left
  // If there is, move to that node and repeat these steps
  // If there is not, we're done searching

  find(value) {
    if (!this.root) {
      return false;
    } else {
      while (true) {
        let current = this.root;
        if (value === current.value) {
          return true;
        } else if (value < current.value) {
          if (!current.left) {
            return false;
          } else {
            current = current.left;
          }
        } else {
          if (!current.right) {
            return false;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}

const bst = new BinarySearchTree();

// Big O of Binary Search Trees

// Best and Average Case
// Insertion - O(log n)
// Searching - O(log n)

// Worst Case is O(n) if the Binary Search Tree was completely one sided
