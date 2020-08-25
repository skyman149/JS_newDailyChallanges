function quadratic(x1, x2){
    let a = 1;
    let b= a*-x2 + a*-x1;
    let c = -x1 * -x2;
    return [1, b, c];
}