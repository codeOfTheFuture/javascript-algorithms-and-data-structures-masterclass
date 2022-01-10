// Merge Sort
// In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
// This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

function merge(arr1, arr2) {
  // Create an empty array, take a look at the smallest values in each input array
  const merged = [];
  let i = 0;
  let j = 0;

  // While there are still values we haven't looked at..
  while (i < arr1.length && j < arr2.length) {
    // If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      // If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
      merged.push(arr2[j]);
      j++;
    }
  }
  // Once we exhaust one array, push in all remaining values from the other array
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}

function mergeSort(arr) {
  // Break up the array into halves until you have arrays that are empty or have one element.
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const arr1 = mergeSort(arr.slice(0, middle));
  const arr2 = mergeSort(arr.slice(middle));
  // Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
  // Once the array has been merged back together, return the merged (and sorted!) array.
  return merge(arr1, arr2);
}

console.log(mergeSort([80, 10, 45, 0, 7, 4]));

// Big O
// Time Complexity: O(n log n)
// Space Complexity: O(1)
