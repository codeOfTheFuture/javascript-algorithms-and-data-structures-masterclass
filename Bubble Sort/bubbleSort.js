// Bubble Sort
// A sorting algorithm where the largest values bubble up to the top!

myArray = [37, 45, 29, 8];

// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     // Start looping with a variable called i at the end of the array towards the beginning
//     for (let j = 0; j < i - 1; j++) {
//       // Start an inner loop with a variable called j from the beginning until i -1

//       if (arr[j] > arr[j + 1]) {
//         // If arr[j] is greater than arr[j+1], swap those two values!
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   // Return the sorted array

//   return arr;
// }

// Optimized with noSwaps
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      // console.log(arr);
      if (arr[j] > arr[j + 1]) {
        // Swap!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// Using a while loop
// function bubbleSort(arr) {
//   let swap = arr.length;
//   while (swap > 0) {
//     for (let i = 0; i < arr.length; i++) {
//       n = i + 1;
//       if (n <= arr.length - 1 && arr[i] > arr[n]) {
//         swap = arr.length;
//         x = arr[i];
//         arr[i] = arr[n];
//         arr[n] = x;
//       } else {
//         swap -= 1;
//       }
//     }
//   }

//   return arr;
// }

// console.log(bubbleSort(myArray));
