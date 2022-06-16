// Divide an Conquer - Count Zeros
// Given an array 1s and 0s, which has all 1s first followed by all 0s.
// Write a function call CountZeros, which return the number of zeroes in the array.

function firstZero(arr, low, high) {
  if (high >= low) {
    const mid = Math.floor((low + high) / 2);

    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    }

    if (arr[mid] === 1) {
      return firstZero(arr, mid + 1, high);
    } else {
      return firstZero(arr, low, mid - 1);
    }
  }
  return -1;
}

function countZeroes(arr) {
  const firstZeroIndex = firstZero(arr, 0, arr.length - 1);
  if (firstZeroIndex === -1) {
    return 0;
  }
  return arr.length - firstZeroIndex;
}

// Test cases 1s then 0s

console.log(countZeroes([])); // 0
console.log(countZeroes([1, 1, 1, 0])); // 1
console.log(countZeroes([1, 1, 1, 0, 0, 0, 0, 0])); // 5
console.log(countZeroes([1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0])); // 6
console.log(countZeroes([1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0])); // 7
console.log(countZeroes([1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0])); // 8
console.log(countZeroes([1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // 9
console.log(countZeroes([1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // 10

// Big O Notation

// Time Complexity: O(log n) - logarithmic
// Time complexity is O(log n) because we are using the binary search to find the first zero. This is because the array is sorted.

// Space Complexity: O(1) - constant
// Space complexity is O(1) because we are using constant space.
