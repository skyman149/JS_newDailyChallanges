/* 
just check the output below code
*/
function numericalTable(n){
    let str = '';
     for (let j = 1; j <= n; j++){
       str += j
       for(let i = 1; i < n; i++){
         str += ' '+j
       }
       if(j<n){
         str+='\n';
       }
     }
     return str;
  }
  console.log(numericalTable(5));
  console.log(numericalTable(3));

"1 1 1 1 1
2 2 2 2 2
3 3 3 3 3
4 4 4 4 4
5 5 5 5 5"

"1 1 1
2 2 2
3 3 3"
