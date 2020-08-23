/*
Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.

to_binary(1)  // should return 1
to_binary(5)  // should return 101
to_binary(11) // should return 1011
*/

function toBinary(n){
    return +n.toString(2);
  }
  
//OR
  
//const toBinary = (n) => +n.toString(2);
