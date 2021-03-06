/*
Напишите функцию minValue, которая принимает два числа a, b в качестве аргументов
 и возвращает меньшее значение из суммы (a + b) и разности (a - b).

Пример:
функция minValue(1, 2) должна возвратить -1 (меньшее из суммы 1 + 2 = 3 и разности 1 - 2 = -1)
функция minValue(1, -2) должна возвратить -1(меньшее из суммы 1 + (-2) = -1 и разности 1 - (-2) = 3)
*/

function minValue(a, b){
    return Math.min(a+b, a-b);
  }

