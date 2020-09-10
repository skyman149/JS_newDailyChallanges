/*
In this kata you get the start number and the end number of a region and 
should return the count of all numbers except numbers with a 5 in it. 
The start and the end number are both inclusive!
*/

//my code:

function dontGiveMeFive(start, end){
    let count =0
    while (start <= end){
      if(start.toString().includes('5')){
        count--;
      }
      count++;
      start++;
    }
    return count;
  }

// mathematical way:

