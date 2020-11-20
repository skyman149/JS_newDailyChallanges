// let arr = [1,5,3,7,10,2,6,8,4,9];
// let arr1 = arr.sort((a, b) => a - b);
// console.log(arr1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let arr2 = arr.sort((a, b) => b - a);
// console.log(arr2);

// let words = ["Alice", "Bob", "Sofia", "Art"];
// let a1 = words.sort();
// console.log(a1);

// Ex. sort by last letter

// function compare(a, b){
//   if(a[a.length-1] > b[b.length-1]){ // b[b.length-1] -> last letter
//     return 1;
//   } else {
//     return -1;
//   }
// }
//console.log(compare("Alice", "Boby")); // -1

// let words = ["Alice", "Bob", "Sofia", "Art"];
// let s1 = words.sort(compare); // compare -> function above
// console.log(s1);

// OR

// let words = ["Alice", "Bob", "Sofia", "Art"];
// let s2 = words.sort((a, b) => a[a.length-1] > b[b.length-1]? 1 : -1)
// console.log(s2); // ["Sofia", "Bob", "Alice", "Art"] -> sorted by last letter

//====================================

// 1. Напишите функцию pattern(n, m) которая 
// принимает размеры n, m и возвращает строку, 
// содержащую узор: (n звездочек в одном ряду, m рядов)
// "**********
// **********
// **********
// **********"

// function pattern(n, m){
//   let s = "";
//   for(let i = 1; i <= m; i++){ // line number
//     for(let j = 1; j <= n; j++){ // number of stars
//       s += '*'
//     }
//     s += (i < m)? '\n': '';
//   }
//   return s;
// }
// console.log(pattern(10, 4));
// console.log(pattern(5, 20));

// OR

// function pattern(n, m){
//   let s = "";
//   for (let i = 1; i <= n; i++){
//     s += '*'.repeat(m) + '\n';
//   }
//   return s.slice(0, -1);
// }
// console.log(pattern(4, 10));
// console.log(pattern(5, 20));

// OR (one line solution)

// function pattern(n, m){
  
//   return ('*'.repeat(m) + '\n').repeat(n).slice(0, -1);
  
// }
// console.log(pattern(4, 10));
// console.log(pattern(5, 20));

// OR

// return array
// [
//   "**********",
//   "**********",
//   "**********",
//   "**********",
// ]

// function pattern(n, m){
//    let result = [];
//    for (let i = 1; i <= n; i++){
//      result.push('*'.repeat(m))
//    }
//    return result;
  
// }
// console.log(pattern(4, 10));

// 2. Напишите функцию drawTriangle(n) которая 
// принимает количество строк n и возвращает строку,
// содержащую рисунок:
// "*
// **
// ***
// ****"

// function drawTriangle(n){
//   let s = "";
//   for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//       s += '*';
//     }
//     s += '\n';
//   }
//   return s.slice(0, -1);
// }
// console.log(drawTriangle(4));

// OR

// function drawTriangle(n){
//   let s = "";
//   for(let i = 1; i <= n; i++){
//     s += '*'.repeat(i) + '\n';
//   }
//   return s.slice(0, -1);
// }
// console.log(drawTriangle(4));

//
//
//

// 4. Напишите функцию drawTriangle(n) которая 
// принимает ширину треугольника (здесь 7) n и возвращает строку,содержащую рисунок:
//     *
//    ***
//   *****
//  *******
// function drawTriangle(n){
//   let s = '\n'; // should be emphty '' but '\n' looks nice in console :)
//   for(let i = 1; i <= n; i += 2){
//     s += ' '.repeat((n-i)/2)+'*'.repeat(i) + '\n'
//   }
//   return s.slice(0, -1);
// }
// console.log(drawTriangle(7));
//     *
//    ***
//   *****
//  *******
//     |

// function tree(n){
//   let s = '\n'; // should be emphty '' but '\n' looks nice in console :)
//   for(let i = 1; i <= n; i += 2){
//     s += ' '.repeat((n-i)/2)+'*'.repeat(i) + '\n'
//   }
//   let stem = Math.trunc(n/4);
//   for(let i = 1; i<= stem; i++){
//     s += ' '.repeat((n-1)/2) + '|'+'\n'; 
//   }
//   return s.slice(0, -1);
// }
// console.log(tree(31));
// console.log(tree(13));
// console.log(tree(11));
// console.log(tree(9));
// console.log(tree(7));
// console.log(tree(5));
// console.log('\n'.repeat(5));

// OR (BETTER WAY)
//     *
//    ***
//   *****
//  *******
// function triangle(n){ // number of lines (floors)
//   let width = n * 2 - 1;
//   let s = "\n";
//   for(let i = 1; i <= width; i += 2){ // i -> numbers of *
//     s += ' '.repeat((width - i)/2) + '*'.repeat(i) + '\n';
//   }
//     return s.slice(0, -1);
// }
// console.log(triangle(4));


// Узор из чисел: (n  чисел в строке, m строк)
// 11111
// 22222
// 33333
// 44444
// function pattern(n, m){
//   let s = '';
//   for(let i = 1l i <= m; i++){
//     s += i
//   }
// }
// console.log(pattern(5, 4));

// 1
// 23
// 456
// 7890
// 12345
// 678901

// function numTriangle(n){ // n -> number of last line.length
//   let s = '';
//   let x = 1;
//   for(let i = 1; i <= n; i++){ // line number
//     for (let j = 1; j <= i; j++){
//       s += x;
//       x++;
//       if(x>9){
//         x= 0
//       }
//     }
//     s+='\n';
//   }
//   return s.slice(0, -1);
// }
// console.log(numTriangle(15));

//============================================

/*
1
12
123
1234
12345
123456
*/
function stairs(n){
    let s = '';
    for(let i = 1; i <= n; i++){ // chislo strok
      for(let j = 1; j <= i; j++){
        s += j + ' ';
      }
      for(let j = i; j >= 1; j--){
        s += j + ' ';
      }
      s += '\n';
    }
    return s.slice(0, -1);
  }
  console.log(stairs(6));
  
  
  
  // Walk-down Stairs
  //"1 1 
  // 1 2 2 1 
  // 1 2 3 3 2 1 
  // 1 2 3 4 4 3 2 1 
  // 1 2 3 4 5 5 4 3 2 1 
  // 1 2 3 4 5 6 6 5 4 3 2 1 "m
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  