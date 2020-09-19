/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
*/

function cleanString(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++){
      if(s[i] === '#'){arr.pop(); continue;}
      arr.push(s[i]);
    }
    return arr.join('');
  };