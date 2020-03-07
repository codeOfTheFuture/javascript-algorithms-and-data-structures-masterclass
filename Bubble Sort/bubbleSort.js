// Bubble Sort
// A sorting algorithm where the largest values bubble up to the top!

myArray = [5, 2, 4, 9, 6, 1, 0];

function bubbleSort(arr) {
  let i = arr.length;
  while (i > 0) {
    // Start looping with a variable called i at the end of the array towards the beginning

    for (let j = 0; j < i - 1; j++) {
      // Start an inner loop with a variable called j from the beginning until i -1

      if (arr[j] > arr[j + 1]) {
        // If arr[j] is greater than arr[j+1], swap those two values!
        i = arr.length;
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      } else {
        i -= 1;
      }
    }

    // Return the sorted array

    return arr;
  }
}

console.log(bubbleSort(myArray));
