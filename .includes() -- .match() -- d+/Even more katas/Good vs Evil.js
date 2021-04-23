function goodVsEvil(good, evil){
  
    let one = 1;
    let two = 2;
    let three = 3;
    let four = 3;
    let five = 4;
    let six = 10;
    let one1 = 1;
    let two2 = 2;
    let three3 = 2;
    let four4 = 2;
    let five5 = 3;
    let six6 = 5;
    let seven7 = 10;
    
    let arrGood = good.split(' ').map(Number);
    let arrEvil = evil.split(' ').map(Number);
    
    let sumGood = arrGood[0]*one + arrGood[1]*two + arrGood[2]*three + arrGood[3]*four + arrGood[4]*five + arrGood[5]*six;
    let sumEvil = arrEvil[0]*one1 + arrEvil[1]*two2 + arrEvil[2]*three3 + arrEvil[3]*four4 + arrEvil[4]*five5 + arrEvil[5]*six6 + arrEvil[6]*seven7;
    
    return sumGood > sumEvil ? "Battle Result: Good triumphs over Evil" : sumGood === sumEvil ? "Battle Result: No victor on this battle field" : "Battle Result: Evil eradicates all trace of Good";
  }