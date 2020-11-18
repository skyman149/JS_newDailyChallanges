/*
Task:
You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

Note: Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
(n)(n-1)(n-2)...4321
(n)(n-1)(n-2)...432
(n)(n-1)(n-2)...43
(n)(n-1)(n-2)...4
...............
..............
(n)(n-1)(n-2)
(n)(n-1)
(n)
Examples:
pattern(4):

4321
432
43
4
pattern(11):

1110987654321
111098765432
11109876543
1110987654
111098765
11109876
1110987
111098
11109
1110
11
Hint: Use \n in string to jump to next line
*/

function pattern(n){
    let output = "";
    let arr = [];
    for(let i = n; i >= 1; i--){
      arr.push(i);
    }
    while (arr.length > 0){
      output += arr.join('') + "\n";
      arr.pop();
    }
     
   return output.slice(0, -1);
  }

// VERY NICE SOLUTION

function pattern(n) {
    var number = "", output = "";
    while (n > 0) {
      number = number + n;
      output = number + (output ? "\n" : "") + output;
      n--;
    }
    return output;
   }