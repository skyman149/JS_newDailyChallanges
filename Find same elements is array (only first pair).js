/*
Find first pair of duplicate array elements, if given array is emphty return [],
if there no duplicates return "All elements are different".
*/
function equalElementsInArray(arr){
    for (let i = 0; i < arr.length - 1; i++){
      for (let j = i + 1; j < arr.length; j++){
        if (arr[i] === arr[j]) {
          return  [arr[i],arr[j]];
        }
      }
    }
    return  (arr.length === 0)? [] : "All elements are different";
  }

  
console.log(equalElementsInArray([1,2,3,4,5])); //"All elements are different"
console.log(equalElementsInArray([5,5,5])); //[5,5]
console.log(equalElementsInArray([])); //[]