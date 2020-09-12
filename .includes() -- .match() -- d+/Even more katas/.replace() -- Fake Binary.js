/*
Given a string of digits, you should replace any digit below 5 with '0' 
and any digit 5 and above with '1'. Return the resulting string.
*/

//my code:

function fakeBin(x){
    return x.replace(/[1234]/g, "0").replace(/[56789]/g, "1")
  }

// OR

function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
  }