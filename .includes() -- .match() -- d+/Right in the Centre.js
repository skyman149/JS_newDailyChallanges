/*
This is inspired by one of Nick Parlante's exercises on the CodingBat online code 
practice tool.

Given a sequence of characters, does "abc" appear in the CENTER of the sequence?

The sequence of characters could contain more than one "abc".

To define CENTER, the number of characters in the sequence to the left and right of 
the "abc" (which is in the middle) must differ by at most one.

If it is in the CENTER, return True. Otherwise, return False.

Write a function as the solution for this problem. This kata looks simple, but it 
might not be easy.

Example
is_in_middle("AAabcBB")  ->  True
is_in_middle("AabcBB")   ->  True
is_in_middle("AabcBBB")  ->  False
*/

function isInMiddle(seq) {
    let mid = Math.ceil(seq.length / 2);
    for(let i = 0; i<seq.length; i++){
      if (seq.length % 2 !== 0 && seq[mid-1] === "b" && seq[mid-2] === "a" && seq[mid] === "c"){
        return true;
      }
      if(seq.length % 2 === 0 && seq[mid] === "b" && seq[mid-1] ==="a" 
         && seq[mid+1]==='c' || seq.length % 2 === 0 && seq[mid]==="c"
         && seq[mid-1] ==='b' && seq[mid-2]==='a'){
        return true;
      }
    }
    return false
  }