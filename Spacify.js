/*
Modify the spacify function so that it returns the given string with spaces 
inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"
*/

function spacify(str) {
    let nStr = '';
    let i = 0;
    while(i<str.length-1){
      nStr += str[i] + ' ';
      i++;
    }
    nStr = nStr + str[str.length-1];
    return nStr;
  }