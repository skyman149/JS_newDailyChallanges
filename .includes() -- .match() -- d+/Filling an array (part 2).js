/*
...square numbers
The numbers from 1 to n*n

const squares = n => ???
squares(5) // [1, 4, 9, 16, 25]
...a range of numbers
A range of numbers starting from start and increasing by step

const range = (n, start, step) => ???
range(6, 3, 2) // [3, 5, 7, 9, 11, 13]
...random numbers
A bunch of random integers between min and max

const random = (n, min, max) => ???
random(4, 5, 10) // [5, 9, 10, 7]
...prime numbers
All primes starting from 2 (obviously)...

const primes = n => ???
primes(6) // [2, 3, 5, 7, 11, 13]
HOTE: All the above functions should take as their first parameter a number that determines the length of the returned array.
*/

//My code:
const squares = n => {
    let arr = [];
    while(n>0){
      arr.unshift(n**2);
      n--;
    }
    return arr;
  }
  
  const range = (n, start, step) => {
    let arr = [];
    while(arr.length < n){
      arr.push(start)
      start += step;
    }
    return arr;
  }
  
  const random = (n, min, max) => {
    let arr = [];
    while(arr.length < n){
      let test = Math.floor(Math.random() * (max - min+1) + min)
      arr.push(test)
    }
    return arr;
  }
  //not my code:
  const primes   = (n,p=1)  => Array.from({length:n}, _=> p = getPrime(p+1));
  
  const getPrime = (n,i=2)  => i*i <= n ? n%i ? getPrime(n,i+1) : getPrime(n+1) : n;