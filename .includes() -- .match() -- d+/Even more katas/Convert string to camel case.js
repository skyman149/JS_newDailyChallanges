function toCamelCase(str){
  
    let res = '';
    
    for(let i = 0; i<str.length; i++) {
      if (str[i] === '_' || str[i] === '-') {
        res += str[i+1].toUpperCase();
        res += ' '
      } else {
        res += str[i];
      }
    }
    
    let camel = res.split('');
    
    for (let i = 0; i < camel.length; i++) {
      if (camel[i] === ' ') {
        camel.splice(i+1, 1)
        camel.splice(i, 1)
      }
    }
    
    return camel.join('');
  }