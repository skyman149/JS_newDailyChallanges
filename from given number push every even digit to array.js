/*
From given number push every even digit to array, if no even numbers return [];
*/

function evenDigits(n){
    let nn = n.toString();
    let arr = [];
    let i = 0;
    do {
      if (nn[i]%2===0){arr.push(parseInt(nn[i]))};
      i++;
    } while (i<nn.length);
    return arr;
}
console.log(evenDigits(1)); // []
console.log(evenDigits(22)); // [2,2]
console.log(evenDigits(333)); // []
console.log(evenDigits(453434)); // [4,4,4]
console.log(evenDigits(12121)); // [2,2]