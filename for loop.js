/*
Найдите значение дроби 1+2+3...+n/1*2*3...*n
question
Дано число n > 0. Найдите значение дроби:
fractional
Напишите функцию с именем fractional, которая принимает число n и 
возвращает значение дроби. В решении используйте цикл for. 
Значение дроби округлите до трех десятичнных знаков.
*/

function fractional(n){
    let top = 0; 
    let bottom = 1;
    for (let i = 1; i <= n; i++) {
       top += i;
       bottom *= i;
     }
     return +(top/bottom).toFixed(3)
}