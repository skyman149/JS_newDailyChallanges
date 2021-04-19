function isIsogram(str){
  
    let res = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    
    return res === null;
  }