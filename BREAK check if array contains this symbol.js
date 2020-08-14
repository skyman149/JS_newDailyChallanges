/*
Напишите функцию с именем isElementIncluded, которая принимает числовой 
массив arr и число x в качестве аргументов и возвращает true, если в массиве 
есть элемент x, и false в противном случае.
В решении необходимо использовать оператор break.
Примеры:
функция isElementIncluded([10, 0, 4, 5, 9, 30], 0) должна возвратить true;
функция isElementIncluded([2, 1, -3, 1, 4, 3], 1) должна возвратить true;
функция isElementIncluded([2, 1, -3, -4, 3], 0) должна возвратить false.
*/

function isElementIncluded(arr, x){
    let b=false;
    for(let i = 0; i<arr.length; i++){
      if(arr[i]===x){
        b=true;
        break;
      }
    }
    return b;
  }
