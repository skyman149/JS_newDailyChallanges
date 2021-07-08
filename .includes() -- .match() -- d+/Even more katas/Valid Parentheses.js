function validParentheses(parens){
  
  let count = 0;
  
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") count++;
    else count--;
    
    if (count < 0) return false;
  }
  
  return count === 0;
}