/*
In this Kata, you will be given an array of numbers in which two numbers occur once 
and the rest occur only twice. Your task will be to return the sum of the numbers that 
occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, 
and their sum is 15.
*/

function repeats(arr){
    let noDupArr = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
    return noDupArr[0] + noDupArr[1];
  };