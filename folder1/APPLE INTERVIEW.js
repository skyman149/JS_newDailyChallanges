let arr = [5, 3, 2, 8, 1, 4];
function sortOdd (arr) {
  let newArr = arr.filter( el => el % 2 !== 0).sort((a, b) => a - b);
  return arr.map(el => el % 2 !== 0 ? newArr.shift() : el);
}
console.log(sortOdd(arr)); // [1, 3, 2, 8, 5, 4]