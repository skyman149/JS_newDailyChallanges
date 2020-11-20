/*
pattern(4):

4
43
432
4321
pattern(6):

6
65
654
6543
65432
654321
*/

function pattern(n){
  
    let output = [];
    for(let i = n; i >= 1; i--){
      let str = "";
      for(let j = n; j >= i; j--){
        str += j;
      }
      output.push(str);
    }
    return output.join("\n")
  }