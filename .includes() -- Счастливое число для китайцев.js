function luckyChineseNumber(numbers){
    let nArr = [];
    for(let i = 0; i < numbers.length; i++){
        let n = numbers[i].toString()
      if(n.includes('8') === true){nArr.push(numbers[i])}
    }
    return nArr;
  }


console.log(luckyChineseNumber([124, 18, 13, 8, 81, 182, 11])) // [18, 8, 81, 182]