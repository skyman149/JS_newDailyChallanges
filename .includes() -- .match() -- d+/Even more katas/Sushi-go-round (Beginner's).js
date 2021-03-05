function totalBill(str) {
  
    let total = str.split(" ").join("").length / 5 * 4;
  
    return Math.ceil(total) * 2;
  }