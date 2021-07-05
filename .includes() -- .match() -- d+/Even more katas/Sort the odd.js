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
    const oddArr = array.filter((x) => x % 2).sort((a,b) => a - b); // filter removes odds, sort sorting in acs order
    let result = array.map((el) => el % 2 ? oddArr.shift() : el); // map creates new array with provided condtion, shift removes and return 1st el of odd array
    return result;
  }