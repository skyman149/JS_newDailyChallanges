function filterHomogenous(arrays) {
  
    let check = [];
    
    for (let i = 0; i < arrays.length; i++) {
      if(new Set(arrays[i].map(x => typeof x)).size <= 1 && arrays[i].length >= 1) check.push(arrays[i])
    }
    
    
    return check;
  }

  // OR


  function filterHomogenous(arrays) {
  
    return arrays.filter(b => b.length > 0 && b.every(e => typeof e == typeof b[0]));;
  
  }