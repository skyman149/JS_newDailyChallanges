String.prototype.camelCase = function() {
  
    return this.replace(/(?:^|\s)([a-z])/g, (_, x) => x.toUpperCase()).trim()
    
  }


  // OR


  String.prototype.camelCase=function(){
    return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
  }

  // OR

  