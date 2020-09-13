/*
addLength('apple ban') => ["apple 5", "ban 3"] // where 5 and 3 are length of its words]
*/

function addLength(str) {
    let arr = str.split(' ');
    let nArr = [];
    for(let i = 0; i<arr.length; i++){
      nArr.push(`${arr[i]} ${arr[i].length}`)
    }
    return nArr;
  }
  