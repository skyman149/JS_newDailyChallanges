/*
Определите, есть ли в массиве отрицательный элемент.
question
Напишите функцию с именем isNegativeInArray, которая принимает массив arr в качестве аргумента и возвращает true, если в массиве есть хотя бы один отрицательный элемент, и false в противном случае. В решении необходимо использовать оператор break.
Указание. Присвойте некоторой переменной значение false. Пройдите по массиву в цикле, и если встретится отрицательный элемент, присвойте этой переменной значение true и выполните прерывание цикла.
Примеры:
функция isNegativeInArray([1, 2, 3, 9, 0]) должна возвратить false;
функция isNegativeInArray([2, 1, -3, 4, 3]) должна возвратить true;
функция isNegativeInArray([2, 1, -3, -4, 3]) должна возвратить true.
*/
function isNegativeInArray(arr){
    let b=0;
    for (let i = 0; i <= arr.length; i++){
      if (arr[i]<0) {
        b=1;
        break;
      }
  }
  return b===1;
  }
  console.log(isNegativeInArray([-1,2,3])); //t
  console.log(isNegativeInArray([1,2,3])); // f 
  console.log(isNegativeInArray([7,2,0,8,0,0,3,5,2])); //f
  console.log(isNegativeInArray([-55,-2,-3])); //t
  console.log(isNegativeInArray([3,-1,4,4,1,0,2,7,0])); //t
  console.log(isNegativeInArray([0])); //f
  console.log(isNegativeInArray([-1])); //t
  console.log(isNegativeInArray([8,7,-1,1,0,1])); //t
  