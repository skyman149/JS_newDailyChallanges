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