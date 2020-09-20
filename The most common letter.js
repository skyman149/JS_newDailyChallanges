/*
Find the most common letter (not space) in the string(always lowercase and 2 < words) 
and replace it with the letter.
If such letters are two or more, choose the one that appears in the string( earlier.
For example:
('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'
*/

function replaceCommon(string, letter) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
    for (let char of string){
      if (char === ' '){continue;}//removes 'space' from object 
      if (charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1
    }
  }
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
    let solution = '';
    for(let i = 0; i<string.length; i++){
      if (string[i] !== maxChar) {solution += string[i];}
      if (string[i] === maxChar) {solution += letter;}
    }
      return solution;
  }

  //OR

  function replaceCommon(string, letter) {
    let obj = {};
    for (let i = 0; i < string.length; i++){
      if (string[i] !== " ") {
        if (obj[string[i]]) obj[string[i]]++;
        else obj[string[i]]=1;
        }
      }
    let arr = Object.entries(obj);
    let maxNum = Math.max(...Object.values(obj));
    let rep = arr.find(el => el[1]===maxNum)[0]
    let str = '';
    for (let i = 0; i < string.length; i++) {
      str += string[i] === rep ? letter : string[i]
    }
    return str;
  }