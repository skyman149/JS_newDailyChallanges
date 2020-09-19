/*
#Task:

Write a function that returns true if the number is a "Very Even" number.

If a number is a single digit, then it is simply "Very Even" if it itself is even.

If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".

#Examples:

input(88) => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 

input(222) => returns true

input(5) => returns false

input(841) => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
*/

function isVeryEvenNumber(n) {
    return (n - 1) % 9 % 2 != 0;
  }

  //OR 

  function isVeryEvenNumber(n) {
    while(n>9){//because if 'n' is one digit number we do not need this loop, so condition is checks if number is more then one digit
      let sum = 0;
      let str = String(n);
      for (let i = 0; i<str.length; i++){
        sum += +str[i];
      }
      n = sum;
    }
    return n % 2 === 0;
  }