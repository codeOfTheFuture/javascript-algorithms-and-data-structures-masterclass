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
