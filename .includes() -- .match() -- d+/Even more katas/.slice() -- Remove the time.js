/*
You're re-designing a blog and the blog's posts have the following format for showing 
the date and time a post was made:

Weekday Month Day, time e.g., Friday May 2, 7pm

Write a function, shortenToDate, that takes the Website date/time in its original 
string format, and returns the shortened format.

Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". 
Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".
*/

// My code:
function shortenToDate(longDate) {
    let n;
    for(let i = 0; i<longDate.length; i++){
      if(longDate[i]===','){n = i} 
    }
    return longDate.slice(0, n);
  }

//OR
function shortenToDate(longDate) {
    return longDate.split(",")[0];
  }