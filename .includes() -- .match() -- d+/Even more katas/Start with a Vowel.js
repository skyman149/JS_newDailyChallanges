function vowelStart(str){
  
    let newStr = str.toLowerCase().replace(/[^a-z0-9]/g, '').split(" ").join("");
    
    return newStr.replace(/([aeiou])/gi,' $1').trim();
  }