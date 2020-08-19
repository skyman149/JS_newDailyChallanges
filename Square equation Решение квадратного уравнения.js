function quadraticEquation(a, b, c){
    let d = Math.pow(b,2) - 4*a*c;
    let x1 = (-b+Math.sqrt(d))/(2*a);
    let x2 = (-b-Math.sqrt(d))/(2*a);
    return d<0? "There are no roots": [x1,x2];
   }
   
//console.log(quadraticEquation(1, 2, 1)) //[-1, -1]
//console.log(quadraticEquation(1, 1, 1)) //"There are no roots"