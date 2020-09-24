/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 
3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5
below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a 
number is negative, return 0(for languages that do have them)
*/

// my code:

function solution(number){
    let sum = 0; // this will be our result
    let arr = []; // in this array will be stored all multiples of 3 and 5
    for(let i = 1; i < number; i++){ // finding all multiples of 3 and 5 and pushing
      if(i % 3 === 0 || i % 5 === 0){ // them to array
        arr.push(i);
      }
    }
    let noDups = arr.filter((el, i)=> arr.indexOf(el) === i); 
    // removing duplicates since if a number has both 3 and 5 multiples we must count it only once
    sum = noDups.reduce((a, b) => a + b, 0) // sum of all el in no duplicates array
    return number < 0? 0 : sum;  // checking if number is negative and returning sum
  }