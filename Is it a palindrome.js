/*
Write function isPalindrome that checks if a given string 
(case insensitive) is a palindrome.

In Racket, the function is called palindrome?

(palindrome? "nope") ; returns #f
(palindrome? "Yay")  ; returns #t
*/

function isPalindrome(x) {
    let str = '';
    for (let i = x.length-1; i>=0; i--){
      str += x[i];
    }
    return str.toUpperCase() === x.toUpperCase();
  }

// NOTE: IF YOU NEED TO CHECK 'if palindrome is more then one word' USE THIS CODE:

function isPalindrome(str){
  let abc = str.toLowerCase().split(' ').join('')
  let abcReverse = abc.split('').reverse().join('')
  return abc === abcReverse; 
}