# Liner Search notes

**There are many different search methods on arrays in JavaScript:**

- indexOf
- includes
- find
- findIndex

## Search States

Given an array, the simplest way to search for a value is to look at every element in the array
and check if it's the value we want

```javascript
const stateNames = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

// indexOf searches the array for a value and returns its index
stateNames.indexOf("Alabama"); // Returns 0
stateNames.indexOf("Florida"); // Returns 8

// A search for something that isn't in the array returns -1
stateNames.indexOf("Mexico"); // Returns -1

// Includes will return a boolean true or false depending if a value is in an array
stateNames.includes("New York"); // Returns true
stateNames.includes("Mexico"); // Returns false
```

When you perform a liner search when you visit one item at a time either starting at the beginning moving forward or starting at the end moving backwards.

## Linear Search Pseudocode

- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1

## Linear Search Exercise

Write a function call **linearSearch** which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

Don't use indexOf to implement this function!

```javascript
// Liner Search

// ** Examples **
// linearSearch([10, 15, 20, 25, 30], 15) // 1

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

linearSearch([10, 15, 20, 25, 30], 20); // 2
linearSearch([10, 15, 20, 25, 30], 150); // -1
```

## Linear Search BIG O

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)
