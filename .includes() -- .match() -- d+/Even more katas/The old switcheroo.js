function vowel2index(str) {
  
    let result = "";
    
    for (let i = 0; i < str.length; i++) {
      if ("aeiou".includes(str[i].toLowerCase())) {
        result += i+1;
      } else {
        result += str[i];
      }
    }
    return result;
  }