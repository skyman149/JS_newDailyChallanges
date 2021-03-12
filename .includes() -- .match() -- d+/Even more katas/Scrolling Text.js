function scrollingText(text){
  
    text = text.toUpperCase();
    let result = [];
    
    for (let i = 0; i < text.length; i++){
      result.push(text);
      text = text.slice(1) + text[0];
    }
    
    return result;
  }