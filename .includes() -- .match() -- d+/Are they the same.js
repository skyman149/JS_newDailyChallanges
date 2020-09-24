/*
each el of array1 in square === element of array2 ?
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
if at least one arr is null return false
*/
function comp(array1, array2){
    if (array1 === null || array2 === null){return false}
    let sqArr = array1.map(el => Math.pow(el, 2));
    return sqArr.sort().join(',') === array2.sort().join(',')
  }
