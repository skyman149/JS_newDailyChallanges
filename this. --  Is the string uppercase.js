String.prototype.isUpperCase = function() {

    return this.toString() === this.toUpperCase();

  }

  //OR

String.prototype.isUpperCase = function () {

  return !/[a-z]/.test(this);
  
};