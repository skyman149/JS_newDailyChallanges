/*
CORRECT DESCRIPTION
product("!") == 0 -----!=1,?=0 1x0=0
Product("!ab? ?") == 2 ------ 1x2=2
Product("!!") == 0 ------ 2x0=0
Product("!??") == 2 ------1x2=2
Product("!???") == 3 ------ 1x3=3
*/function product(s){
    let count1 = 0;
    let count2 = 0
    for(let i = 0; i<s.length; i++){
      if(s[i] === '!'){count1++}
      if(s[i] === '?'){count2++}
    }
    return count1 * count2;
  }

//OR

function product(s){
    excs = s.split('!').length - 1
    ques = s.split('?').length - 1
    return excs * ques
  }

//OR

function product(s){
    return (s.match(/\?/g)||[]).length * (s.match(/\!/g)||[]).length;  
  }