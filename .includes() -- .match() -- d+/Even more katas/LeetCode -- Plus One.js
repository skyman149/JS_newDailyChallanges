// easy solution

var plusOne = function(digits) {
    
    let num = BigInt(digits.join('')); // originaly it was "+digits.join('') +1" but "+" doesn't work for really big integers
    num++;
      
    return num.toString().split('');
      
  };

// or long solution

var plusOne = function(digits) {
  
    let target = digits.length-1
    
    while (target >=0 ) { 
       if (digits[target] !== 9) {
          digits[target] += 1;
          return digits;
       } 
       if(target == 0 && digits[target] == 9) {
         digits[target] = 0;
         digits.unshift(1);
         return digits;
      }
      
    digits[target] = 0
       target--
    }
  };

console.log(plusOne([1,2,3])); // [1,2,4]
console.log(plusOne([9,9])); // [1,0,0]