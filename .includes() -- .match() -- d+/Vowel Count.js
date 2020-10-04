// count vowels in given char;

function getCount(str) {
    let vowelsCount = 0;
    for(let el of str)
    {
      if(el === "a" || el === "e" || el === "i" || el === "o" || el === "u")
      {
        vowelsCount++;
      }
    }
    return vowelsCount;
  }