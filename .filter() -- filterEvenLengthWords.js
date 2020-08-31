/*
Given an array of strings, "filterEvenLengthWords" returns an array containing 
only the elements of the given array whose length is an even number.
*/

function filterEvenLengthWords(words) {
    let even = words.filter(el => el.length % 2 === 0);
    return even;
  }