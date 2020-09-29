/*
if both monkeys are smile or both not smile we got a problem (true)
*/

function problem(aSmile, bSmile){
    if(aSmile === bSmile){
      return true;
    }
    return false
  }
  console.log(problem(true, true)); // true
  console.log(problem(false, true)); // false
  console.log(problem(true, false)); // false
  console.log(problem(false, false)); // true