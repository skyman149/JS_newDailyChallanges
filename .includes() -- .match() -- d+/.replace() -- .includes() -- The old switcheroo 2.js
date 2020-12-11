function swap(letter){
    letter = letter.toLowerCase();
    let alph = "abcdefghijklmnopqrstuvwxyz";
    
    return alph.includes(letter)? alph.indexOf(letter) + 1 : letter;
  } 
  
  function encode(str){
    return str.replace(/./g, swap);
  }

  // https://www.codewars.com/kata/55d6a0e4ededb894be000005/train/javascript