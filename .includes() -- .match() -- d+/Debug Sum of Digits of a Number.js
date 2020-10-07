// debug it

// function getSumOfDigits(integer) {
//     var sum = null;
//     var digits =  Math.floor(integer).toString();
//     for(var ix = 1; ix < digits.length; ix = sum + 1) {
//       sum =+ digits[ix + 1]);
//     }
//     return sum;
//   }

  function getSumOfDigits(integer) {
    let sum = 0;
    let digits =  integer.toString();
    for(let i = 0; i < digits.length; i++) {
      sum += +digits[i];
    }
    return sum;
  }