// Selection Sort
// Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

myArray = [14, 38, 21, 6, 1];

function selectionSort(arr) {
  // Store the first element as the smallest value you've seen so far.
  let smallestValue;
  for (let i = 0; i < arr.length; i++) {
    smallestValue = i;
    for (let j = i + 1; j < arr.length; j++) {
      // Compare this item to the next item in the array until you find a smaller number.
      if (arr[j] < arr[smallestValue]) {
        smallestValue = j;
        // If a smaller number is found, designate that smaller number to be the new 'minimum' and continue until the end of the array.
      }
    }
    if (i !== smallestValue) {
      // If the 'minimum' is not the value (index) you initially began with, swap the two values.
      let currentValue = arr[i];
      arr[i] = arr[smallestValue];
      arr[smallestValue] = currentValue;
    }
    // Repeat this with the next element until the array is sorted.
  }
  return arr;
}

console.log(selectionSort(myArray));
