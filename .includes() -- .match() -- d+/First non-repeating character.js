//  https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
    let arr = s.split("");
    let noDup = arr.filter(el => s.toLowerCase()
                .indexOf(el.toLowerCase()) === s.toLowerCase().lastIndexOf(el.toLowerCase()))
    return noDup[0] === undefined? "" : noDup[0];
  }