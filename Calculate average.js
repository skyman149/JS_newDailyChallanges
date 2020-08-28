/*
Write function avg which calculates average of numbers in given list.
*/

function find_average(array) {
    let sum = 0;
    let count = 0;
    for (let el of array){
      sum+=el;
      count++;
    }
    return sum/count;
  }