/*
Имеется последовательность размеров прямоугольников, заданных парами своих 
сторон [a, b]:
[[a0, b0], [a1, b1], ..., [an, bn]]. Найдите прямоугольник с максимальной площадью.
Напишите функцию maxRectangleSquare, которая принимает массив arr, содержащий
 размеры прямоугольников, в качестве аргумента и возвращает максимальную площадь 
 прямоугольника.
Пример:
функция maxRectangleSquare([[3, 4], [8, 1], [2, 3]]) должна возвратить 12;
функция maxRectangleSquare([[7, 7], [7, 8]]) должна возвратить 56;
функция maxRectangleSquare([[2, 4]]) должна возвратить 8;
функция maxRectangleSquare([]) должна возвратить null;
*/

function maxRectangleSquare(arr){
    let doubledArray = arr.map(el => el.reduce((acc, cur) => acc*cur,1));
    return arr.length === 0? null : Math.max(...doubledArray)
  }

// AND TASK #2: Mаксимальный периметр прямоугольника

function maxRectanglePerimeter(arr){
    let doubledArray = arr.map(el => el.reduce((acc, cur) => acc+cur*2,0));
    return arr.length === 0? null : Math.max(...doubledArray)
  }