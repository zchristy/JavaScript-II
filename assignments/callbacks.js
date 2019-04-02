// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/*

  //Given this problem:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// --------------------------------------------------------------------------------------------
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, function(length) {
  console.log(length)
});



// --------------------------------------------------------------------------------------------
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
last(items, function(length) {
  console.log(length)
});
// --------------------------------------------------------------------------------------------
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}
let x = 4;
let y = 10;
sumNums(x, y, function(x, y) {
  console.log(x + y)
});
// --------------------------------------------------------------------------------------------
function multiplyNums(a, b, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(a, b);
}

let a = 4;
let b = 10;
multiplyNums(a, b, function(a, b) {
  console.log(a * b)
});
// --------------------------------------------------------------------------------------------
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

let list = [1, 2, 3, 4, 5, 6];
let item = 4;
contains(item, list, function(item, list) {
  let result = list.filter(function(val){
    return val === item;
  });
  console.log(result);
})
// --------------------------------------------------------------------------------------------
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}

let array = [1, 1, 1, 2, 3, 4, 4, 5, 5, 6, 7];
removeDuplicates(array, function(array) {
  let newArray = array.filter(function(val, i) {
    return array.indexOf(val) >= i;
  });
  console.log(newArray);
});
