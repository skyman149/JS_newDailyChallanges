/*
Given a mixed array of number and string representations of integers, 
add up the string integers and subtract this from the total of the non-string 
integers.
Return as a number.
*/

function divCon(x){
    let sumI = 0;
    let sumS = 0;
    for (let el of x){
      if (typeof el === 'string'){sumS += +el;}
      if (typeof el == 'number'){sumI += el;}
    }
    return sumI - sumS;
  }