/*
In this kata your task is to remove all the duplicates from the array using a 
standart build-in method - Array.prototype.filter(); return the array containing 
unique values only.

Tip: use the index of value(s) to solve this kata
*/

function unique(arr) {
    return arr.filter((el, i) => i === arr.indexOf(el));
  }