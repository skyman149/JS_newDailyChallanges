var humanYearsCatYearsDogYears = function(humanYears) {
  
    if(humanYears === 1) return [1,15,15];
    
    const n = humanYears - 2;
    
    let catYears = (n * 4) + 9 + 15;
    let dogYears = (n * 5) + 9 + 15;
    
    return [humanYears, catYears, dogYears,];
  }
  