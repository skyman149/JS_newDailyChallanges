function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    let count = 0;
    for (let el of classPoints){
      sum += el;
      count++;
    }
    return sum/count < yourPoints;
  }
  