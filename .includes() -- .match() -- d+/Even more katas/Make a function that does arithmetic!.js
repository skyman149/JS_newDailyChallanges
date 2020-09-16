/*
Given two numbers and an arithmetic operator (the name of it, as a string), return the 
result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the 
operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".
*/
function arithmetic(a, b, operator){
    switch(operator) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      default:
        return a / b;
    }
  }

  //OR

  function arithmetic(a, b, operator){
    let object = {
      add: (a + b),
      subtract: (a - b),
      multiply: (a * b),
      divide: (a / b),
    }
    return object[operator]
  }

  //OR

  function arithmetic(a, b, operator){
    optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
    return eval(a + optable[operator] + b); 
  }