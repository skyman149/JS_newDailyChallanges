String.prototype.toJadenCase = function () { 
    return this.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
  }