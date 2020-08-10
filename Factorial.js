/*
given "n" number to factorial using "while"
*/
function factorial(n){
    let fac = 1;
      while(n >= 1) {
        fac *= n;
        n--;
      }
      return fac;
  }