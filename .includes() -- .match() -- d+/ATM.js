/*
There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.
You are given money in nominal value of n with 1<=n<=1500.
Try to find minimal number of notes that must be used to repay in dollars, or output -1 if 
it is impossible.
*/

function solve(n) {
  
    let count = 0;
    
    while(n >= 500){
      n -= 500;
      count++;
    }
    
    while(n >= 200){
      n -= 200;
      count++;
    }
    
    while(n >= 100){
      n -= 100;
      count++;
    }
    
    while(n >= 50){
      n -= 50;
      count++;
    }
    
    while(n >= 20){
      n -= 20;
      count++;
    }
    
    while(n >= 10){
      n -= 10;
      count++;
    }
    
    return n === 0 ? count : -1;
  }
  function solve(n) {
    const arr = [500, 200, 100, 50, 20, 10];
    let count = 0;
    for (let el of arr) {
      while (n >= el) {
        n -= el;
        count++;
      }
    }
    return n === 0 ? count : -1;
  }