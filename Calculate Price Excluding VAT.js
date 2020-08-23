function excludingVatPrice(price){
    let per = 1.15;
    
    return price === null? -1: +(price/per).toFixed(2);
  }