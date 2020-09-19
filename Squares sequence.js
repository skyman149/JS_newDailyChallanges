/*
omplete the function that returns an array of length n,
 starting with the given number x and the squares of the previous number. 
 If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
*/

//Not my solution:

const squares = (x, n) => Array.from({ length: n }, (_, index) => x ** (2 ** index))

// BEST SOLUTION FOR BEGINERS:

function squares(x, n) {
    let arr = [];
    let i = 1;
    while (i <= n){
      arr.push(x);
      x = x ** 2;
      i++;
    }
    return arr;
  }

  //OR

  function squares(x, n) {
    let arr = [];
    for (let i = 0; i < n; i++){ // runs "n" times
      arr.push(x);
      x *= x;
    }
    return arr;
  }

  //OR

  