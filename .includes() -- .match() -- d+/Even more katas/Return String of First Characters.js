function makeString(s){
  
    let arr = s.split(" ");
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i][0]);
    }
    
    return result.join("");
  }

  
  // OR

  function makeString(s){
  
    return s.split(" ").map(el => el[0]).join("");
  
  }