function isSquare(x){
    let sq = Math.sqrt(x);
    return sq ** 2 === x && Number.isInteger(sq)? `${x} is square of ${sq}`: `${x} is not a square`
 }
 