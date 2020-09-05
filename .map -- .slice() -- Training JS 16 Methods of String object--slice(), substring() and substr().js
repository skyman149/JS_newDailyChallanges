function cutIt(arr){
    const minLen = Math.min(...arr.map(str => str.length));
    return arr.map(str => str.slice(0, minLen));
  }
// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript