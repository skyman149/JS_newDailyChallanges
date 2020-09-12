/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

// my code:
function position(letter){
    let abc = "abcdefghijklmnopqrstuvwxyz" 
    return `Position of alphabet: ${abc.indexOf(letter)+1}`;
  }

// OR

function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt() - 96}`
   }