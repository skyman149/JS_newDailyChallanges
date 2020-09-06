/*
Given a string, you have to return a string in which each 
character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
*/

function doubleChar(str) {
    let nStr = '';
    for (let i = 0; i<str.length; i++){
      nStr += str[i].repeat(2)
    }
    return nStr;
  }
  