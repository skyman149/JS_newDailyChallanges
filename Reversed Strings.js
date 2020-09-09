// return reverse str

function solution(str){
    let str1 = '';
    for (let i = str.length-1; i>=0; i--){
      str1 += str[i]
    }
    return str1;
  }

// OR

function solution(str){
    return str.split("").reverse().join("");
  }
  //spilt -> [w, o, r, l, d], reverse -> [d, l, r, o, w], join -> 'dlrow'