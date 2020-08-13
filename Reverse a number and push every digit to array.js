/*
Given number reverse and push to array (separate every digit)
*/

function arrayOfDigits(n){
    let nn = n.toString();
    let arr = [];
    let i = 1;
    do {
      arr.push(parseInt(nn[nn.length-i]));
      i++;
    } while (i<=nn.length);
    return arr;
  }
  console.log(arrayOfDigits(123456));