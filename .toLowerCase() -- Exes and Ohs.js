function XO(str) {
    let lowStr = str.toLowerCase()
    let x = 0
    let o = 0
    for (let i = 0; i < lowStr.length; i++){
      if (lowStr[i] === "x"){x++;}
      if (lowStr[i] === "o"){o++;}
    }
    return x===o;
  }

  /*
   Check to see if a string has the same amount of 'x's and 'o's. 
   The method must return a boolean and be case insensitive. The string 
   can contain any char.
   */