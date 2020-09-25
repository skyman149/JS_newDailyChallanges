/*
You are given an n by n grid of characters for example:

[['m', 'y', 'e'], 
 ['x', 'a', 'm'], 
 ['p', 'l', 'e']]
You are also given a list of integers as input for example:

[1, 3, 5, 8]
You have to find the characters in these indexes of the grid if you think of the 
indexes as:

[[1, 2, 3], 
 [4, 5, 6], 
 [7, 8, 9]]
Remember that the indexes start from one and not zero.

Then you output a string like this:

'meal'
All inputs will be valid.
*/

function gridIndex(grid, indices) {
    let arr = grid.toString().split(',');
    let str = '';
    for(let i = 0; i<indices.length; i++){
      str = str + arr[indices[i]-1];
    }
    return str;
  }

  //OR

  function gridIndex(grid, indices) {
    let arr = [0];
    let str = '';
    for (el of grid){
      for (let i = 0; i < el.length; i++) {
        arr.push(el[i])
      }
    }
    for (i = 0; i < indices.length; i++) {
      str += arr[indices [i]]
    }
    return str;
  }