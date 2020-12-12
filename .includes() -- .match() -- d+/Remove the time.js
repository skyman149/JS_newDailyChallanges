//  https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript

function shortenToDate(longDate) {
    return longDate.split(",")[0];
  }

// OR

function shortenToDate(longDate) {
    let n;
    for(let i = 0; i<longDate.length; i++){
      if(longDate[i]===','){n = i} 
    }
    return longDate.slice(0, n);
  }