function cookingTime(weight) {
    var minutesCooked = Math.ceil((20 + (20 * ((weight * 1000)/450)))/5)*5; // round to 5 minute
    
    let result = 
        minutesCooked < 60 ? minutesCooked + " mins"
      : minutesCooked % 60 === 0 ? minutesCooked/60 + " hrs"
      : minutesCooked / 60 > 2 ? Math.floor(minutesCooked/60) + " hrs " + minutesCooked%60 + " mins"
      : minutesCooked % 60 ? Math.floor(minutesCooked/60) + " hr " + minutesCooked%60 + " mins"
      : Error;
      
    return weight === 0 ? "There is no chicken!" : result;
  }