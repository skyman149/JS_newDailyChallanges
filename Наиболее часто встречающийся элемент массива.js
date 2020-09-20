/*
Напишите функцию mostFrequentElement, которая принимает массив arr в качестве аргумента и возвращает элемент, встречающийся наибольшее число раз. Если таких элементов несколько, вернуть все элементы в виде массива.

Примеры:

функция mostFrequentElement([5, 2, 1, 5]) должна возвратить [5] (так как 5 встречается в массиве 2 раза - чаще, чем все остальные элементы).

функция mostFrequentElement([5, 7, 1, 1, 1, 8, 7, 3, 6, 7, 1]) должна возвратить [1] (так как 1 встречается в массиве 4 раза - чаще, чем все остальные элементы).

функция mostFrequentElement(5, 7, 7, 1, 1, 1, 8, 7, 3, 6, 7, 1) должна возвратить [1, 7] (так как элементы 1 и 7 встречаются одинаковое число раз: 4 раза.

функция mostFrequentElement([]) должна возвратить [].
*/

function mostFrequentElement(arr){
    let obj = {};
    for (let i = 0; i < arr.length; i++){
      if (obj[arr[i]] === undefined){obj[arr[i]] = 1;}
      else {obj[arr[i]] += 1;}
    } 
    let fullArr = Object.entries(obj);
    let valArr = Object.values(obj);
    let max = Math.max(...valArr);
    let newArr = []
    for(let i = 0; i<fullArr.length; i++){
      if(fullArr[i][1] === max){newArr.push(+fullArr[i][0]);}
    }
    return newArr;
  }
  console.log(mostFrequentElement([5, 2, 1, 5])); //[5]
  console.log(mostFrequentElement([5, 7, 7, 1, 1, 1, 8, 7, 3, 6, 7, 1])); //[1, 7]
  console.log(mostFrequentElement([])); //[]

  //OR

  function mostFrequentElement(arr){
    arr.sort((a,b) => a-b);
    let newArr = [];
    let maxNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) === maxNum) {
        newArr.push(arr[i]);
      }
      if (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) > maxNum) {
        newArr = []
        newArr.push(arr[i]);
        maxNum = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]);
      }
    }
    return newArr//.filter((el, i) => i === newArr.indexOf(el));
  }
  console.log(mostFrequentElement([5, 2, 1, 5])); //[5]
  console.log(mostFrequentElement([5, 7, 7, 1, 1, 1, 8, 7, 3, 6, 7, 1])); //[1, 7]
  console.log(mostFrequentElement([])); //[]
  