// THE HASH PART
// To implement a hash table, we'll be using an array.

// In order to look up values by key, we need a way to covert keys into valid array indices.

// A function that performs this task is called a hash function

// A basic hash function is a function that takes data of arbitrary size and spits out data of a fixed size. It's going to map an input to an output of a fixed size.

// WHAT MAKES A GOOD HASH
// (Not a cryptographically secure one)

// 1. Fast (i.e. constant time)
// 2. Doesn't cluster outputs at specific indices, but distributes uniformly
// 3. Deterministic (same input yields same output)

// Simple hash function

let total = 0;
total += "hello".charCodeAt(0);
total += "hello".charCodeAt(1);
total += "hello".charCodeAt(2);
total += "hello".charCodeAt(3);
total += "hello".charCodeAt(4);

// total equals 52
// pass in the string and length of array as args when calling hash function
// hash('hello', 11)
// we need an index that will be valid and 52 is not.
// How do we keep it within these bounds?  Easiest way is to use the modulo operator
total = total % 11; // now we get a valid array index between 0 and 10.

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map 'a' to 1, 'b' to 2, 'c' to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

hash("pink", 10); // 0
hash("orangered", 10); // 7
hash("cyan", 10); // 3

// Refining our hash (problems with our current hash)
// 1. Only hashes strings (we won't worry about this)
// 2. Not constant time - linear in key length
// 3. Could be a little more random

// The prime number in the hash is helpful in spreading outh the keys more uniformly.

// It's also helpful inf the array that you're putting values into has a prime length.

function hash(key, arrayLen) {
  let total = 0;
  const WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

// Even with a large array and a great hash function, collisions are inevitable.

// There are many strategies for dealing with collisions, but we'll focus on two:
//1. Separate chaining
//2. Linear probing

// Separate chaining
// With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).
// This allows us to store multiple key-value pairs at the same index.

// Linear probing
// With linear probing, when we find a collision, we search through the array to find the next empty slot.
// Unlike with separate chaining, we don't have to store multiple key-value pairs at the same index.

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }

  remove(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index].splice(i, 1);
        }
      }
    }
  }
}

let ht = new HashTable();
ht.set("hello world", "goodbye world");
console.log(ht.keys());
