/*
determine if a given non-negative integer is a power of two.
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 
and 0 is not a power of 2.
*/

function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));   
}
