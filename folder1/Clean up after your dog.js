function crap(x, bags, cap) {
    let crapCount = 0;
    let dogCount = 0;
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < x[i].length; j++) {
          if (x[i][j] ==='@'){
            crapCount++;
          }
          if (x[i][j] ==='D'){
            dogCount++;
          }
        }
      }
    return dogCount > 0 ? "Dog!!" : crapCount > bags*cap ? "Cr@p" : "Clean";
    }