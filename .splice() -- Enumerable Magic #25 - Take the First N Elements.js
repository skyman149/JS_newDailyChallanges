/*
Create a method take that accepts a list/array and a number n, and returns 
a list/array array of the first n elements from the list/array.
*/

function take(arr, n) {
    return arr.splice(0, n);
  }