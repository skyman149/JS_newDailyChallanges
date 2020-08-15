/*
Напишите функцию с именем countLinesWithNegativeElements, которая принимает 
двухмерный массив arr в качестве аргумента и возвращает количество строк, 
содержащих хотя бы один отрицательный элемент.

Примеры:
countLinesWithNegativeElements([[1, 2], [2, -2, -3], [3, 5], [3, 4, 5, -1, 8]]) 
должна возвратить 2; (так как только две строки (два элемента массива) имеют 
отрицательные элементы: [2, -2, -3], [3, 4, 5, -1, 8].
*/

function countLinesWithNegativeElements(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr[i].length; j++){
        if (arr[i][j]<0){
          count++;
          break;
        }
      }
    }
    return count;
  }

  console.log(countLinesWithNegativeElements([[1, 2], [2, -2, -3], [3, 5], [3, 4, 5, -1, 8]])); //2
  console.log(countLinesWithNegativeElements([[1, -2], [2, -2, -3], [3, 5], [3, 4, 5, -1, 8], [-3, -1]])); //4