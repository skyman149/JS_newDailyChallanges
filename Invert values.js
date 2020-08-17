/*
Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
*/

function invert(array) {
    let arr = [];
    for (let el of array){
      arr.push(-el);
    }
    return arr;
  }
  