/*
A number is called Automorphic number if and only if 
its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .
*/

function automorphic(n){
    let sqr = Math.pow(n, 2);
    return sqr.toString().endsWith(n.toString())? "Automorphic" : "Not!!"
  }