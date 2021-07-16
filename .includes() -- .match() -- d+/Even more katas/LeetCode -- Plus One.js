// easy solution

var plusOne = function(digits) {
    
    let num = BigInt(digits.join('')); // originaly it was "+digits.join('') +1" but "+" doesn't work for really big integers
    num++;
      
    return num.toString().split('');
      
  };