String.prototype.camelCase = function() {
  
    return this.replace(/(?:^|\s)([a-z])/g, (_, x) => x.toUpperCase()).trim()
    
  }