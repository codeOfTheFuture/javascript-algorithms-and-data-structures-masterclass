function binarySearch(arr, val) {
  let left = 0,
    right = arr.length - 1,
    middle = Math.floor((left + right) / 2);

  while (arr[middle] !== val && left <= right) {
    if (arr[middle] < val) left = middle + 1;
    else right = middle - 1;
    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] === val ? middle : -1;
}

const bs1 = binarySearch([1, 2, 5, 17, 30, 55, 70, 99], 2), // returns 1
  bs2 = binarySearch([1, 2, 5, 17, 30, 55, 70, 99], 70), // returns 6
  bs3 = binarySearch([1, 2, 5, 17, 30, 55, 70, 99], 22); // returns - 1

console.log(bs1); // 1
console.log(bs2); // 6
console.log(bs3); // -1
