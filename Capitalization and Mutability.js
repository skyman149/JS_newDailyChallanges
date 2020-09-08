function capitalizeWord(word) {
    let cap = word[0].toUpperCase();
    let rest = '';
    for (let i = 1; i<word.length; i++){
      rest += word[i];
    }
    return cap+rest;
  }

  /*
  Your coworker was supposed to write a simple helper function to capitalize
   a string (that contains a single word) before they went on vacation.
  */