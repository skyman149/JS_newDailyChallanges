function openOrSenior(data){
  
    let arr = [];
    
    for (let i = 0; i < data.length; i++) {
      if (data[i][0] >= 55 && data[i][1] > 7) arr.push("Senior");
      else arr.push("Open");
    }
    
    return arr;
    
  }