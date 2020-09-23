/*
For a given string s find the character c (or C) with longest consecutive repetition 
and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters 
with the same l return the first in order of appearance.

For empty string return:

["", 0]
Happy coding! :)
*/

function longestRepetition(s) {
    let arr = s.split("");
    let firstEl;
    let count = 0;
    let superCount = 0;
    let char = '';
    for (let i = 0; i<arr.length; i++){
      if (firstEl === arr[i]) {
        count++
    } else {
      count = 1;
    }
      firstEl = arr[i];
      if(count > superCount){
        char = firstEl;
        superCount = count;
      }
    }
    return s === "" ? ["",0] : [char, superCount];
  }

  // console.log(longestRepetition("bbbaaabaaaa")); // ["a",4]