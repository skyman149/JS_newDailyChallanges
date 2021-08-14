function removeDuplicateWords (s) {
  
    let arr = [];
    s = s.split(' ');
  
    for (let i = 0; i < s.length; i++) {
      if(arr.includes(s[i])) continue;
      else arr.push(s[i]);
}
  
  return arr.join(' ');
  
}

// OR

function removeDuplicateWords (s) {
  
    let wordsArr = s.split(" ");
    let unique = wordsArr.filter((el, ind, arr) => arr.indexOf(el) === ind);
    
    return unique.join(' ');
    
  }