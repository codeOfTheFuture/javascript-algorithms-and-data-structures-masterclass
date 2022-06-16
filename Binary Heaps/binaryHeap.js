// What is a binary heap?
//
// Very similar to a bst but with some different rules!

// In a MaxBinaryHeap, parent nodes are always larger than children nodes.
// In a MinBinaryHeap, parent nodes are always smaller than children nodes.

// Max Binary Heap
// Each parent has at most two child nodes.
// The value of each parent node is always greater than its child nodes.
// In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.

// A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled before right children.

// Binary Heaps are used to implement Priority Queues, which are very commonly used data structures.
// They are also use quite a bit, with graph traversal algorithms.

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // Insert
  insert(value) {
    // Push the value into the values property on the heap
    this.values.push(value);
    // Call the bubbleUp function
    this.bubbleUp();
  }

  // Bubble Up
  bubbleUp() {
    // Get the index of the element we are bubbling up
    let index = this.values.length - 1;
    // Get the element at the index
    const element = this.values[index];
    // While the element is greater than its parent and the index is greater than 0 (meaning it has a parent)
    while (index > 0) {
      // Get the index of the parent
      let parentIndex = Math.floor((index - 1) / 2);
      // Get the element at the parent index
      let parent = this.values[parentIndex];
      // If the parent is greater than the element we are bubbling up to the top, break out of the loop because we are done
      if (element <= parent) break;
      // Otherwise, swap the element with the parent
      this.values[parentIndex] = element;
      this.values[index] = parent;
      // Update the index
      index = parentIndex;
    }
  } // End of Bubble Up

  // Extract Max
  extractMax() {
    // Get the max value
    const max = this.values[0];
    // Get the length of the values array
    const length = this.values.length;
    // Set the last element to the first element
    this.values[0] = this.values[length - 1];
    // Pop the last element off the values array
    this.values.pop();
    // Re-order the tree
    this.sinkDown();
    // Return the max value
    return max;
  } // End of Extract Max

  // Sink Down
  sinkDown() {
    // Get the index of the element we are sinking down
    let index = 0;
    // Get the length of the values array
    const length = this.values.length;
    // Get the element at the index
    const element = this.values[0];
    // While the index has children
    while (true) {
      // Get the index of the left child
      let leftChildIndex = 2 * index + 1;
      // Get the index of the right child
      let rightChildIndex = 2 * index + 2;
      // Get the left child
      let leftChild;
      // Get the right child
      let rightChild;
      let swap = null;
      // If the left child index is less than the length of the values array
      if (leftChildIndex < length) {
        // Get the left child
        leftChild = this.values[leftChildIndex];
        // If the element is less than the left child
        if (element < leftChild) {
          // Set the swap variable to be the left child
          swap = leftChildIndex;
        }
      }
      // If the right child index is less than the length of the values array
      if (rightChildIndex < length) {
        // Get the right child
        rightChild = this.values[rightChildIndex];
        // If the swap variable is null or the right child is less than the element
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          // Set the swap variable to be the right child
          swap = rightChildIndex;
        }
      }
      // If the swap variable is not null
      if (swap !== null) {
        // Swap the element with the swap variable
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        // Update the index
        index = swap;
      } else {
        // Break out of the loop because we are done
        break;
      }
    }
  } // End of Sink Down
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55); // 41, 39, 33, 18, 27, 12, 55 (41 is the max)

// console.log(heap.extractMax()); // 55

// Priority Queue
// A priority queue is a data structure that is similar to a regular queue, but each element has a priority associated with it.
// The elements with the highest priority are served first. In a priority queue, the element with the highest priority is always the first element to be removed.  The element with the lowest priority is the last element to be removed.

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    // Create a new object with the value and priority
    const newNode = new Node(value, priority);
    // Push the new node into the values property
    this.values.push(newNode);
    // Call the bubbleUp function
    this.bubbleUp();
  }

  bubbleUp() {
    // Get the index of the element we are bubbling up
    let index = this.values.length - 1;
    // Get the element at the index
    const element = this.values[index];
    // While the element is greater than its parent and the index is greater than 0 (meaning it has a parent)
    while (index > 0) {
      // Get the index of the parent
      let parentIndex = Math.floor((index - 1) / 2);
      // Get the element at the parent index
      let parent = this.values[parentIndex];
      // If the parent is greater than the element we are bubbling up to the top, break out of the loop because we are done
      if (element.priority >= parent.priority) break;
      // Otherwise, swap the element with the parent
      this.values[parentIndex] = element;
      this.values[index] = parent;
      // Update the index
      index = parentIndex;
    }
  } // End of Bubble Up

  dequeue() {
    // Get the max value
    const max = this.values[0];
    // Get the length of the values array
    const length = this.values.length;
    // Set the last element to the first element
    this.values[0] = this.values[length - 1];
    // Pop the last element off the values array
    this.values.pop();
    // Re-order the tree
    this.sinkDown();
    // Return the max value
    return max;
  } // End of Dequeue

  sinkDown() {
    // Get the index of the element we are sinking down
    let index = 0;
    // Get the length of the values array
    const length = this.values.length;
    // Get the element at the index
    const element = this.values[0];
    // While the index has children
    while (true) {
      // Get the index of the left child
      let leftChildIndex = 2 * index + 1;
      // Get the index of the right child
      let rightChildIndex = 2 * index + 2;
      // Get the left child
      let leftChild;
      // Get the right child
      let rightChild;
      let swap = null;
      // If the left child index is less than the length of the values array
      if (leftChildIndex < length) {
        // Get the left child
        leftChild = this.values[leftChildIndex];
        // If the element is less than the left child
        if (element.priority < leftChild.priority) {
          // Set the swap variable to be the left child
          swap = leftChildIndex;
        }
      }
      // If the right child index is less than the length of the values array
      if (rightChildIndex < length) {
        // Get the right child
        rightChild = this.values[rightChildIndex];
        // If the swap variable is null or the right child is less than the element
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          // Set the swap variable to be the right child
          swap = rightChildIndex;
        }
      }
      // If the swap variable is not null
      if (swap !== null) {
        // Swap the element with the swap variable
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        // Update the index
        index = swap;
      } else {
        // Break out of the loop because we are done
        break;
      }
    } // End of Sink Down
  }
}

let pq = new PriorityQueue();
pq.enqueue("common cold", 1);
pq.enqueue("gunshot wound", 5);
pq.enqueue("high fever", 4);
pq.enqueue("broken arm", 2);
pq.enqueue("glass in foot", 3);

console.log(pq.values);
console.log(pq.dequeue());
console.log(pq.values);
console.log(pq.dequeue());
console.log(pq.values);

// Big O of Binary Heaps
// Insertion: O(log n)
// Removal: O(log n)
// Search: O(n)
// Space: O(n)

export default PriorityQueue;
