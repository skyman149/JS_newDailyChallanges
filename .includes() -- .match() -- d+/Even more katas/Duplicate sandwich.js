function duplicateSandwich(a) {
    let x = 0;
    let arr;
    if (typeof(a) === "string") {
      arr = a.split(""); x = 1;
    } else {
      arr = a;
    }
    
    let dup = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el));
    let index = [];
    
      for (let i = 0; i < arr.length; i++) {
      if (arr[i] === dup[0]) index.push(i)
    }
    
    let cut1 = arr.slice(index[0]+1, index[1]);
    
    return x === 1 ? cut1.join("") : cut1;
  }