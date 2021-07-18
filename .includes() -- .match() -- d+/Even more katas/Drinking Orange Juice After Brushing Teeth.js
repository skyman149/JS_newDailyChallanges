function calcWaitForOJ(flavor, amount) {
  
    let minutes;
    
    if (flavor === "Minty-Fresh") minutes = 37 * amount;
    if (flavor === "Lemon-Sage") minutes = 15 * amount;
    if (flavor === "Fruit-Fusion") minutes = 24 * amount;
    
    return minutes > 0 ? 
            `It's safe to drink OJ after ${Math.round(minutes)} minutes.` : 
            "It's safe to drink OJ now.";
  
  }