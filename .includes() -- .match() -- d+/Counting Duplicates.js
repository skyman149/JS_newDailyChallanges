/*
Write a function that will return the count of distinct case-insensitive alphabetic 
characters and numeric digits that occur more than once in the input string. The input 
string can be assumed to contain only alphabets (both uppercase and lowercase) 
and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// my code:

function duplicateCount(text){
    let up = text.toUpperCase(); // to make sure all chars are caps(no lowercase)
    let arr = up.split("").sort(); // creating array and sorting each el in 1-a-z order
    let uniq = arr.filter((el, i) => arr.indexOf(el) !== i); // removing duplicates
    
    let count = 0;
    
    for (let i = 0; i<uniq.length; i++){ //if el not equal next el count +1
      if(uniq[i] !== uniq[i+1]){
        count++;
      }
    }
    return count;
  }