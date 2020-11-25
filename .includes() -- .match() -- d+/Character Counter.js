function count(str, char){
  
    let s = 0;
    
    for(let el of str){
      if(el === char){
        s++;
      }
    }
    return s;
  }
  
  function validateWord(s){
      
    s = s.toLowerCase()
    s = s.split('').map(el => count(s, el));
    
    return s.every(el => el === s[0]);
  }