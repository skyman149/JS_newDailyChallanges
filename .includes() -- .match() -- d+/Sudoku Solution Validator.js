/*
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

Examples
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false
*/

// my solution:
function validSolution(board){
    let zeroCount = 0;
    let result;
    
    // below: check for emphty spaces (0's)
    
    for (let i = 0; i<board.length; i++){
      for (let j = 0; j<board[i].length; j++){
        if (board[i][j] === 0){
          zeroCount++;
        }
      }
    }
    if (zeroCount > 1){return false;}
    
    // below: check in rows
    
    for (let i = 0; i<board.length; i++){
      for (let j = 0; j<board[i].length; j++){
        let check = board[j].filter(el => board[j].indexOf(el) !== board[j].lastIndexOf(el));
        //console.log(check.length);
        if (check.length > 0){result = false; break;}
        else{result = true;}
      }
    }
    //  below: check in colums
    let arr = [];
    for (let i = 0; i<board.length; i++){
      let sub = [];
      arr.push(sub);
      for (let j = 0; j<board[i].length; j++){
        sub.push(board[j][i]);
      }
    }
    for (let i = 0; i<arr.length; i++){
      for (let j = 0; j<arr[i].length; j++){
        let check1 = arr[j].filter(el => arr[j].indexOf(el) !== arr[j].lastIndexOf(el));
        //console.log(check.length);
        if (check1.length > 0){result = false; break;}
        else{result = true;}
      }
    }
    //  below: check in 9 small squares
    let sub1 = [];
    let sub2 = [];
    let sub3 = [];
    for (let i = 0; i<3; i++){
      sub1.push(board[i][0]);
      sub1.push(board[i][1]);
      sub1.push(board[i][2]);
      sub2.push(board[i][3]);
      sub2.push(board[i][4]);
      sub2.push(board[i][5]);
      sub3.push(board[i][6]);
      sub3.push(board[i][7]);
      sub3.push(board[i][8]);
    }
    let sub4 = [];
    let sub5 = [];
    let sub6 = [];
    for (let i = 3; i<6; i++){
      sub4.push(board[i][0]);
      sub4.push(board[i][1]);
      sub4.push(board[i][2]);
      sub5.push(board[i][3]);
      sub5.push(board[i][4]);
      sub5.push(board[i][5]);
      sub6.push(board[i][6]);
      sub6.push(board[i][7]);
      sub6.push(board[i][8]);
    }
    let sub7 = [];
    let sub8 = [];
    let sub9 = [];
    for (let i = 6; i<9; i++){
      sub7.push(board[i][0]);
      sub7.push(board[i][1]);
      sub7.push(board[i][2]);
      sub8.push(board[i][3]);
      sub8.push(board[i][4]);
      sub8.push(board[i][5]);
      sub9.push(board[i][6]);
      sub9.push(board[i][7]);
      sub9.push(board[i][8]);
    }
    let arr1 = [];
    arr1.push(sub1);
    arr1.push(sub2);
    arr1.push(sub3);
    arr1.push(sub4);
    arr1.push(sub5);
    arr1.push(sub6);
    arr1.push(sub7);
    arr1.push(sub8);
    arr1.push(sub9);
    
    for (let i = 0; i<arr1.length; i++){
      for (let j = 0; j<arr1[i].length; j++){
        let check2 = arr1[j].filter(el => arr1[j].indexOf(el) !== arr1[j].lastIndexOf(el));
        //console.log(check.length);
        if (check2.length > 0){result = false; break;}
        else{result = true;}
      }
    }
    return result;
  }


  // shoprter solution

  function validSolution(board){
    let resultArr = [];
   let verticalArr = [[], [], [], [], [], [], [], [], []];
     let checkArr = [];
   for (let i = 0; i < 9; i++) {
     board.map(el => verticalArr[i].push(el[i]));
   }
    for (let i = 0; i < 9; i++) { 
      if (board[i].reduce((acc, cur) => acc + cur) === 45 && verticalArr[i].reduce((x, b) => x + b) === 45) {resultArr.push(1);
      } else {resultArr.push(0);}
      for (let c = 0; c < 9; c = c + 3) {checkArr = []
     checkArr = checkArr.concat(board[c].slice(c, c + 3))
     checkArr = checkArr.concat(board[c + 1].slice(c, c + 3))
     checkArr = checkArr.concat(board[c + 2].slice(c, c + 3))
      if (checkArr.reduce((acc, cur) => acc + cur) === 45) {resultArr.push(1);
      } else {resultArr.push(0)}
   }
   
    } return !resultArr.includes(0);
   }