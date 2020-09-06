/*
Дана строка. Получите новую строку, вставив пробелы между буквами исходной строки.

Напишите функцию с именем insertSpaces, которая принимает строку str в качестве
 аргумента и возвращает строку, в которой между буквами вставлены пробелы.

Пример:

функция insertSpaces("abcde") должна возвратить "a b c d e".
*/

function insertSpaces(str){
    return str.split("").join(" "); 
  }

  // OR

  function insertSpaces(str){
    let nStr = '';
    for(let i = 0; i<str.length; i++){
     if (i<str.length-1){
       nStr += str[i]+' ';
     } else {
       nStr += str[i]
     }
    }
    return nStr;
  }