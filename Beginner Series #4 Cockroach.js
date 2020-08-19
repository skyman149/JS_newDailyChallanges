/*
The cockroach is one of the fastest insects. Write a function which takes 
its speed in km per hour and returns it in cm per second, rounded down to the 
integer (= floored).

For example:

cockroachSpeed(1.08) == 30
Note! The input is a Real number (actual type is language dependent) 
and is >= 0. The result should be an Integer.
*/

function cockroachSpeed(s) {
    return Math.floor(s*27.7777778); //27.7777778 is result of 100000/3600, to convert km/h to cm/sec you need km * 1000 * 100 and h*60*60 :)
  }
  