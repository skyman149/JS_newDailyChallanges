function integerPartsOfElements(arr){
    let nArr = [];
    for (let el of arr){nArr.push(Math.trunc(el))}
    return nArr;
  }

//функция integerPartsOfElements([7.23, 34.89, 0.9, 4.45, 8.5]) 
//             должна возвратить [7, 34, 0, 4, 8].