function validateCode (code) {
    let c = code.toString()
    return c.startsWith('1') || c.startsWith('2') || c.startsWith('3');
  }

/*
Basic regex tasks. Write a function that takes in a numeric code of any length. 
The function should check if the code begins with 1, 2, or 3 and return true if so. 
Return false otherwise.

You can assume the input will always be a number.
*/