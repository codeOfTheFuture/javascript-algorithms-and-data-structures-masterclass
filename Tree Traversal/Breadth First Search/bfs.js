import { BinarySearchTree } from "../bst";
import { Queue } from "./queues";

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

// BFS Steps - Iteratively
function breathFirstSearch(bst) {
  // Create a queue (this can be an array) and a variable to store the value of nodes visited
  const queue = new Queue(),
    result = [];
  let node = bst.root;
  // Place the root node in the queue
  queue.enqueue(bst.root);
  // Loop as long as there is anything in the queue
  while (queue.size !== 0) {
    // Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    node = queue.dequeue();
    result.push(node.value);
    // If there is a left property on the node dequeued - add it to the queue
    if (node.left) {
      queue.enqueue(node.left);
    }
    // If there is a right property on the node dequeued - add it to the queue
    if (node.right) {
      queue.enqueue(node.right);
    }
  }
  // Return the variable that stores the values
  return result;
}

const search = breathFirstSearch(bst);
console.log(search);
