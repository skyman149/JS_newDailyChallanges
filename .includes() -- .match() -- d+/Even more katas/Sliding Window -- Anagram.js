let s = "cbaebabacd";
let p = "abc";

// find index of appearance of all anagrams (from first letter index)
// correct solution [0, 6];

// sliding window works like a window of our scope, which you are moving thru 
// the string. Since its moving one element at a time, we only delete one element
// from left and add one element from right into our scope
// EX -> [] is a window
// "[cba]ebabacd" -> "c[bae]babacd" -> "cb[aeb]abacd" and so on.

function findAnagrams(s, p) {
  
  let result = [],
      mapOfLettersOfLookingWord = {},
      left = 0,
      right = 0,
      count = p.length;
  
  s = s.split('');
  
  for (let i = 0; i < p.length; i++) {
    mapOfLettersOfLookingWord[p.charAt(i)] ? mapOfLettersOfLookingWord[p.charAt(i)]++ : mapOfLettersOfLookingWord[p.charAt(i)] = 1;
  }
  
  while (right < s.length) {
    if (mapOfLettersOfLookingWord[s[right++]]-- >= 1) count--;
    if (count === 0) result.push(left);
    if (right - left === p.length && mapOfLettersOfLookingWord[s[left++]]++ >= 0) count++;
  }
  
  return result;
  
}

console.log(findAnagrams(s,p));
