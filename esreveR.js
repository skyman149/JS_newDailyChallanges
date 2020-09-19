//reverese array with no .reverse() method

reverse = function(array) {
    let arr = [];
    for(let el of array){
      arr.unshift(el);
    }
    return arr;
  }