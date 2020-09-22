/*
In this Kata, you will be given an array of strings and your task is to remove all 
consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
*/
//My code:
function dup(s) {
    let res = [];
     for(let i = 0; i<s.length; i++){
       let res1 = []
       for(let j = 0; j<s[i].length; j++){
         if (s[i][j] !== s[i][j+1]){res1.push(s[i][j])}
         if (s[i][j] === s[i][j+1]){continue}
       }
       let word = res1.join('');
       res.push(word)
     }
     return res;
   };

   //OR

   function dup(arr) {
    return arr.map(s => s.split('').map((t,i) => s[i+1] !== t ? t : '' ).join(''));
  };