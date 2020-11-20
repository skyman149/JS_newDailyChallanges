function pattern(n){
  
    let output = "";
    
    for(let i = 1; i <= n; i++){
      for(let j = i; j <= n; j++){
        output += j;
      }
      output += "\n";
    }
    
   return output.slice(0, -1);
  }

  /*
  pattern(4):

1234
234
34
4
pattern(6):

123456
23456
3456
456
56
6
  */