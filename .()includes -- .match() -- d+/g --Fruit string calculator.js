/*
Given a string of words and numbers. Extract the expression including:

the operator: either addition or subtraction
the two numbers that we are operating on
Return the result of the calculation.

Example:

"Panda has 48 apples and loses 4" returns 44

"Jerry has 34 apples and gains 6" returns 40

"loses" and "gains" are the only two words describing operators.

Should be a nice little kata for you :)

Note: No fruit debts nor bitten apples = The numbers are integers and no negatives
*/

//my code:
function calculate(string) {
    let numsArr = string.match(/\d+/g); // creates array from matches
    if(string.includes('loses')){return +numsArr[0] - +numsArr[1];}
    if(string.includes('gains')){return +numsArr[0] + +numsArr[1];}
  }