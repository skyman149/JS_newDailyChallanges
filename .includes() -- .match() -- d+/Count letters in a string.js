function countLetters(str) {
    if (typeof str !== "string") return null;
    str = str.toLowerCase().replace(/[^a-z]/g, '');
    let obj = {};
    
    for (letter of str){
      if (letter in obj){
        obj[letter]++
      } else {
        obj[letter] = 1;
      }
    }
    return obj;
  }