/*
Given a 2D array of size m * n. Your task is to find the sum of minimum 
value in each row.
For Example:
[
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]
So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26
*/

function sumOfMinimums(arr) {
    return arr.reduce( (acc, cur) => acc + Math.min(...cur), 0);
   }

   //OR(my code)

   function ss(arr){
    let sum = 0;
      for (let i = 0; i<arr.length; i++){
        sum +=Math.min(...[].concat(...arr[i]))
      }
    return sum;
  }
  console.log(ss([[3,5,2],[7,8,1,12],[1],[12,3,10]])); //7