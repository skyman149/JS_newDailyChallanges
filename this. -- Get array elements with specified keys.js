Array.prototype.only = function(keys){
  
    keys = keys.sort((a, b) => a - b);
    let arr = [];
    for (let i = 0; i < keys.length; i++) {
      arr.push(this[keys[i]]);
    }
  
    return arr;
}


// OR


Array.prototype.only = function(k) {

    return this.filter((e, i) => k.includes(i));
    
  }