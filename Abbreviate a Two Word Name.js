/*
Write a function to convert a name into initials. This kata strictly takes two 
words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
*/

// my code
function abbrevName(name){
    let arr = name.split("")
    let newStr = '';
    newStr += arr[0]+'.'
    for (let i = 0; i<arr.length; i++){
      if (arr[i] === ' '){newStr+= arr[i+1]}
    }
    return newStr.toUpperCase();
  }

  // OR

  function abbrevName(name) {
    [first, last] = name.toUpperCase().split(' ');
    return first[0] + '.' + last[0];
  }

  //OR

  function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}