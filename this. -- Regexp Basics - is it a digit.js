String.prototype.digit = function() {
  
    return /^\d$/g.test(this);
  
};

// OR

String.prototype.digit = function() {

    return /^[0-9]$/.test(this);

  };

// OR

String.prototype.digit = function() {
  
    return this.match(/^[0-9]$/) ? true : false;
    
  };