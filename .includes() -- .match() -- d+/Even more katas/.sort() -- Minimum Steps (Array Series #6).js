function minimumSteps(numbers, value){
  
    let sorted = numbers.sort((a, b) => a - b);
    let sum = 0;
  
    for (let i = 0; i < sorted.length; i++) {
      sum += sorted[i];
      if (sum >= value) return i; 
    }
  }