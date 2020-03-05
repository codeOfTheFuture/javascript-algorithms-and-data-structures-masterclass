# Big O Notation Notes

## Objectives

- Motivate the need for something like Big O Notation
- Describe what Big O is
- Simplify Big O Expressions
- Define "time complexity" and "space complexity"
- Evaluate the time complexity and space complexity of different algorithms using Big O Notation
- Describe what a logarithm is

## What's the idea here

- **Imagine we have multiple implementations of the same function**

### Example

"Write a function that accepts a string input and returns a reversed copy"

[See Stack Overflow post for different approaches](https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript/16776621)

#### How do we know which one's best

We can use Big O Notation as a system to classify code or comparing it

- Why does it matter whats best? Doesn't it only matter that you get it to work.

In some ways depending on the project and context it's true the best solution is the one that you can get to work.  But when talking technical interview code challenges or working at a large company where you're working with a huge data set, say hundreds of millions of pieces of data where one algorithm implementation could save an hour every time it runs compared to another implementation.

- It's important to have a precise vocabulary to talk about how code performs

- Useful for discussing trade-offs between different approaches

- When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications

- Less important: it comes up in interviews!

## An Example

Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

**First Solution:**

```javascript
function addUpTo(n) {
  let total = 0;
  for(let i = 1; i<=n; i++) {
    total += i;
  }
  return total;
}
```

**Second Solution:**

```javascript
function addUpTo(n) {
  return n * (n + 1) / 2;
}

```

### Which one is better

**What does better mean?**

- Faster?

Code thats fastest when adding a small number vs. a large number?

- Less memory-intensive?
- More readable?
- Brevity

It really comes down to the situation?
Most often it is the first two, faster code that is not memory-intensive.

## The Problem with Time

- Different machines will record different times
- The _same_ machine will record different times!
- For fast algorithms, speed measurements may not be precise enough?

## Counting Operations

### If not time, then what

Rather than counting _seconds_, which are so variable...

Let's count the _number_ of simple operations the computer has to perform!


```javascript
function addUpTo(n) {
  return n * (n + 1) / 2;
}

```

In the second solution from before that was faster there is a 1 multiplication 1 addition and 1 division.  There are three operations.  It doesn't really matter what _n_ is. If _n_ is 2 or _n_ is a billion there are still only 3 simple operations, regardless of the size of _n_.

```javascript
function addUpTo(n) {
  let total = 0;
  for(let i = 1; i<=n; i++) {
    total += i;
  }
  return total;
}
```

If we compare this to the first solution it is using a loop. So _i_ will be added to the total each time the loop runs.  If _n_ is 5 then there would be 5 operations being done within the function.  It will always be _n_ additions and _n_ assignments.  Then within the condition of the loop there are _n_ number of additions and assignments every time _i_ is incremented as well as 1 assignment for the variable _i_ at the beginning of the loop and _n_ comparisons. Finally 1 assignment for the total variable.

Overall how many operations would we say there were. The previous solution there were 3 but this solution doesn't have a constant number of operations so how do we generalize it? Depending on what we count, the number of operations can be as low as 2 _n_ or as high as 5 _n_ + 2.

But regardless of the exact number, the number of operations grows roughly proportionally with _n_.

## Intro to Big O

### Big O Notation is a way to formalize fuzzy counting

### It allows us to talk about how the runtime of an algorithm grows as the inputs grow

### We won't care about the details, only the trends

#### We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!

##### Example

```javascript
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```
**Always 2 operations**
**O(1)**

```javascript
function addUpTo(n) {
  let total = 0;
  for(let i = 1; i<=n; i++) {
    total += i;
  }
  return total;
}
```
**Number of operations is (eventually) bounded by a multiple of *n* (say, 10*n*)**

#### Another Example
```javascript
function countUpAndDown(n) {
  console.log("Going Up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!Going down...");
  for (let j = 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}
```

**Number of operations is (eventually) bounded by a multiple of *n* (say, 10*n*)**

**This gets simplifiied to O(n)**

#### Next Example

```javascript
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

**Nested for loops outer loop is O(n) inner loop is O(n)**
**O(n) operation inside of an O(n) operations is O(n * n) or O(n^2)**

## Simplifying Big O Expressions
### When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions.

## These rules of thumb are consequences of the definition of big O notation.

## Constants don't matter

O(2n) -> O(n)
O(500) -> O(1)
O(13n^2) -> O(n^2)
Simplify it down

## Smaller terms don't matter

O(n + 10) -> O(n)
O(1000n +50) -> O(n)
O(n^2 + 5n + 8) -> O(n^2)

## Big O Shorthands

- Analyzing complexity with big O can get complicated
- There are serveral rules of thumb that can help
- These rules won't **Always** work, but are a helpful starting point

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

## A couple more examples

```javascript
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
```
