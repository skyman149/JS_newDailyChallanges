function perimeter(x1, y1, x2, y2, x3, y3){
    return +((Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))) + (Math.sqrt(Math.pow(x3-x1,2)+Math.pow(y3-y1,2))) + (Math.sqrt(Math.pow(x3-x2,2)+Math.pow(y3-y2,2)))).toFixed(2);
  }

console.log(perimeter(1, 1, 4, 1, 1, 5)); //12