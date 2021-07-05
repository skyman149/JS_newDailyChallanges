function sortArray(array) {
  
    let evenArr = [];
    let oddArr = [];
    let result = [];
    
    for (let el of array) {
      if (el % 2 === 0) evenArr.push(el);
      else oddArr.push(el);
    }
    
    oddArr.sort((a, b) => a - b);
    
    for (let el of array) {
      if (el % 2 === 0) result.push(evenArr.shift());
      else result.push(oddArr.shift());
    }
   
    return result;
    
  }

  // OR

  function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
 }