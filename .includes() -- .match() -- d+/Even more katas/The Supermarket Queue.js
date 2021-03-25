function queueTime(customers, n) {
  
    let cashier = [];
    
    while(n > 0) {
      cashier.push(0);
      n--;
    }
    
    for (let i = 0; i < customers.length; i++) {
      let index = cashier.indexOf(Math.min(...cashier));
      cashier[index] += customers[i];
    }
    console.log(customers)
    return Math.max(...cashier);
    
  }