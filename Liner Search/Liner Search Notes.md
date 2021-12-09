# Liner Search notes

**There are many different search methods on arrays in JavaScript:**

- indexOf
- includes
- find
- findIndex

## Example

### Search States

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

**Liner Search Pseudocode**

- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1

```javascript

```
