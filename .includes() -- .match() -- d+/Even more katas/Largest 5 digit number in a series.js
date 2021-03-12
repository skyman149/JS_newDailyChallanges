function solution(digits){
  
    let result = [];
    
    for (let i = 0; i < digits.length; i++) {
      let fiveDigNum = digits.substr(i, 5);
      result.push(fiveDigNum);
    }
    
    return Math.max(...result);
  }