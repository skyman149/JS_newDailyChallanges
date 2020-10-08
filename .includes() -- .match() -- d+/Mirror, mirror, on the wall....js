/*
You get a list of integers, and you have to write a function mirror that returns the 
"mirror" (or symmetric) version of this list: i.e. the middle element is the greatest, 
then the next greatest on both sides, the the next greatest, and so on...

More info
The list will always consist of integers in range -1000..1000 and will vary in size 
between 0 and 10000. Your function should not mutate the input array, and this will 
be tested (where applicable). Notice that the returned list will always be of odd size, 
since there will always be a definitive middle element.

Examples
[]  -->  []
[1]  -->  [1]
[2, 1]  -->  [1, 2, 1]
[1, 3, 2]  -->  [1, 2, 3, 2, 1]
*/

// my code (works but codewars didn't like due to "no mutation" rule in the description):

function mirror(data) {
  
    let part1 = data.sort((a,b) => a-b);
    let part2 = [];
    
    for (let i = 0; i<part1.length-1; i++){
      part2.unshift(part1[i]);
    }
    return part1.concat(part2);
  }
  console.log(mirror([2, 3, 1])); //[1, 2, 3, 2, 1]
  console.log(mirror([2])); //[2]
  console.log(mirror([])); //[]

//my second code (same issue :/)

function mirror(data) {
    let part1 = data.sort((a,b)=>a-b)
    let part2 = part1.slice(0,-1).reverse().sort((a,b) => b-a);
    return part1.concat(part2)
  }
  // "proper" code

