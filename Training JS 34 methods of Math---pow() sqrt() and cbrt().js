function cutCube(volume,n){
    const isOK = x => (Math.round(Math.cbrt(x)) ** 3 === x);
     return isOK(volume / n) && isOK(n);
 }