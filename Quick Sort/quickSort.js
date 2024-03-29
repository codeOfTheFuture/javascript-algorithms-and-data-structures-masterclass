// Quick Sort
// Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted.
// Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array.

// Pivot Helper
// In order to implement merge sort, it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot.
// Given an array, this helper function should designate an element as the pivot.
// The order of elements on either side of the pivot doesn't matter!
// The helper should do this in place, that is, it should not create a new array.
// When complete, the helper should return the index of the pivot

// Picking a pivot
// The runtime of quick sort depends in part on how one selects the pivot
// Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting.
// For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later)

// Pivot Pseudocode
// It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)

// Grab the pivot from the start of the array.

// Store the current pivot index in a variable (this will keep track of where the pivot should end up)

// Loop through the array from the start until the end

// If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.

// Swap the starting element (i.e. the pivot) with the pivot index

// return the pivot index

function pivot(arr, start = 0) {
  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

// Quicksort Pseudocode

// Call the pivot helper on the array

// When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index

// Your base case occurs when you consider a subarray with less than 2 elements

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

// Big O
// Time Complexity
// Average Case: O(n log n)
// Worst Case: O(n ^ 2)

// Space Complexity
// O(1)
