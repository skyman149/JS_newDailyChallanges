/*
Find the sum of the odd numbers within an array, after cubing the initial integers. 
The function should return undefined/None/nil/NULL if any of the values aren't 
numbers.
*/

function cubeOdd(arr) {
    let sum = 0;
    for (let el of arr){
      if (typeof el !== 'number'){return undefined}
      if (el % 2 !== 0){sum+=Math.pow(el,3)}
    }
    return sum;
  }