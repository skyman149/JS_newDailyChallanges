function filterHomogenous(arrays) {
  
    let check = [];
    
    for (let i = 0; i < arrays.length; i++) {
      if(new Set(arrays[i].map(x => typeof x)).size <= 1 && arrays[i].length >= 1) check.push(arrays[i])
    }
    
    
    return check;
  }