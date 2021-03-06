/*
You are given three piles of casino chips: white, green and black chips:

the first pile contains only white chips
the second pile contains only green chips
the third pile contains only black chips
Each day you take exactly two chips of different colors and head to the casino. You can choose any color, but you are not allowed to take two chips of the same color in a day.

You will be given an array representing the number of chips of each color and your task is to return the maximum number of days you can pick the chips. Each day you need to take exactly two chips.

solve([1,1,1]) = 1, because after you pick on day one, there will be only one chip left
solve([1,2,1]) = 2, you can pick twice; you pick two chips on day one then on day two
solve([4,1,1]) = 2
More examples in the test cases. Good luck!

Brute force is not the way to go here. Look for a simplifying mathematical approach.
*/

// MATHEMATICAL APPROACH:

function solve(arr){
    let sorted = arr.sort((a,b) => a-b); // sorts from min to max
    
    let check = sorted[0] + sorted[1];
    let sum = sorted[0] + sorted[1] + sorted[2];
    
    if(check <= sorted[2]){return check;}
    else {return Math.floor(sum / 2);}
  }

  // LOOP APPROACH:

  function solve(arr){
    let count = 0;
    arr.sort((a,b) => a-b); // sorts from min to max
    while(arr[0]!=0){
      count++;
      arr[0]--;
      arr[2]--;
      arr.sort((a,b)=>a-b);
     }
    return count + arr[1];
  }