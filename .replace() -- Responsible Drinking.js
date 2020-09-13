/*
Codewars Bar recommends you drink 1 glass of water per standard drink so you're not 
hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. 
Return a string suggesting how many glasses of water you should drink to not be hungover.

Examples
"1 beer"  =>  "1 glass of water"
"1 shot, 5 beers and 1 glass of wine"  =>  "7 glasses of water"
*/

function hydrate(s) {
    let numsStr = s.replace(/\D/g,'');
    let sum = 0;
    for (let i = 0; i < numsStr.length; i++) {
          sum += +numsStr[i];
    }
    return sum === 1? `${sum} glass of water` : `${sum} glasses of water`;
  }