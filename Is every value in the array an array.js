/*
Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false
*/

const arrCheck = value => {
    let b = true;
    for (let i = 0; i<value.length; i++){
      if ({}.toString.call(value[i])!=="[object Array]"){
        b=false;
      }
    }
    return b;
  }