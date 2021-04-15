function nbYear(p0, percent, aug, p) {
    
    let count = 0;
    let population = p0 + (p0*(percent/100)) + aug;
    
    while (population < p) {
      population = population + (population*(percent/100)) + aug;
      count++;
    }
    console.log(population)
    return count + 1;
  }