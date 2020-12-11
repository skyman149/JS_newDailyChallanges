//  https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/train/javascript

function calculate(string) {
    let numsArr = string.match(/\d+/g); // creates number-only array

    if(string.includes('loses')){
        return +numsArr[0] - +numsArr[1];
    }
    else {
        return +numsArr[0] + +numsArr[1];
    }
  }

  // OR

  function calculate(string) {
  
    let arr = string.split(' ')
                    .filter( el => +el)
                    .map(el => +el);
    
    return string.includes("loses")? arr[0] - arr[1] : arr[0] + arr[1];
  }