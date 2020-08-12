//Draw stairs on Codewars

//My code which prints real stairs 
//as shown in example but codewars tests not passed:

function drawStairs(n) {
  let s = 'I\n'
  let space = ' ';
  for (let i = 1; i<=n-1; i++){
    space += ' ';
    s+=space+'I\n';
  }
  return n===1? 'I':s;
}


//Correct code to pass tests:
//BUT if you will print it 1st and 2nd stairs looks exactly the same(not as shown in example): 

function drawStairs(n) {
  if (n > 1){ 
    let str = ''
    for (let i = 1; i <n; i++){
      str +=`I\n${' '.repeat(i)}`
    }
    return str + 'I';
  } else {
    return 'I';
  }
}
