function pigLatin(phrase){

    let phaseLowArr = phrase.toLowerCase().split(" ");
    let result = [];
    
    for (let i = 0; i < phaseLowArr.length; i++) {
      let word = phaseLowArr[i].substring(1);
      let pig = word + phaseLowArr[i][0];
      result.push(pig +"ay")
    }
    
    return result.join(" ");
  }