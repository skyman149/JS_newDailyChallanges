function letterCheck(arr) {
  
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();
    let res = str2.split("").filter(el => str1.includes(el)).length;
    
    return str2.length === res; 
  }