/*
Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. This is only 
applicable to the natural numbers.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

//my code:
function digital_root(n) {
    while (n > 9){ // because we need one digit num
      let everyDigitArr = ("" + n).split('') //array of every digit of number(el will be string)
      let sum = everyDigitArr.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0) // reduce used for total sum of all elem, parseInt to convert string to number
      n = sum;
    }
    return n;
  }