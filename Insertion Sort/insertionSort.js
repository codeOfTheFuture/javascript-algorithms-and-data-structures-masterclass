myArray = [2, 1, 9, 76, 4];
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // Start by picking the second element in the array
    // Now compare the second element with the one before it and swap if necessary.

    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  // Repeat until the array is sorted
  return arr;
}

insertionSort(myArray);
