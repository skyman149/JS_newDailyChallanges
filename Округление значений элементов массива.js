function roundElementsOfArray(arr){
    let nArr = [];
    for(let el of arr){nArr.push(Math.round(el));}
    return nArr;
  }

  console.log(roundElementsOfArray([1.2, 3.6]));//[1, 4]