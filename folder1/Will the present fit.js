function willFit(present, box){
    present.sort((a,b) => a - b);
    box.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < present.length; i++) {
      if (present[i] < box[i] - 1) {
        count++
      }
    }
    return count === 3;
  }