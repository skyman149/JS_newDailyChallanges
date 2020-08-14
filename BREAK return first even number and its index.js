/*
Напишите функцию с именем firstEvenElement, которая принимает массив arr 
в качестве аргумента и возвращает первый четный элемент и его индекс в виде
 массива [element, index]. Если в массиве нет ни одного четного элемента, 
 вернуть пустой массив []. В решении необходимо использовать оператор break.

Примеры:

функция firstEvenElement([1, 2, 3, 4, 9, 0]) должна возвратить [2, 1];
функция firstEvenElement([2, 1, -3, 4, 3]) должна возвратить [2, 0];
функция firstEvenElement([9, 1, -3, -4, 12, 6]) должна возвратить [-4, 3];
функция firstEvenElement([9, 1, -3, 3, 11]) должна возвратить [].
*/

function firstEvenElement(arr){
    let arrN = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i]%2==0) {
        arrN.push(arr[i]);
        arrN.push(i);
        break;
      }
  }
  return arrN;
}

