function getDigit(num, place) {
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
}

function digitCount(num) {
  return num.toString().length;
}

function maxDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Radix Sort Pseudocode
// Define a function that accepts a list of numbers
// Figure out how many digits the largest number has
// Loop from k = 0 up to the largest number of digits
// For each iteration of the loop:
// Create buckets for each digit
// place each number in the corresponding bucket
// based on its kth digit
// Replace our existing array with values in our buckets,
// starting with 0 and going up to 9

function radixSort(numArr) {
  let maxDigitCount = maxDigits(numArr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let num of numArr) {
      const digitBucketIndex = getDigit(num, k);
      digitBuckets[digitBucketIndex].push(num);
    }
    numArr = digitBuckets.reduce(
      (newNumArr, bucket) => newNumArr.concat([...bucket]),
      []
    );
  }
  return numArr;
}

const nums1 = [453, 2245, 5, 87, 170, 14, 1001, 9];
const result1 = radixSort(nums1);
console.log(result1);

// Big 0
// Time Complexity: O(nk)
// Space complexity 0(n + k)
