function twoOldestAges(ages){
    ages.sort((a,b) => b-a);
    let arr = [];
    arr.push(ages[0]);
    arr.push(ages[1]);
    return [arr[1], arr[0]]
  }