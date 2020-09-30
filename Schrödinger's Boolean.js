/*
Can a value be both true and false?

Define omniBool so that it returns true for the following:

omniBool == true && omniBool == false
*/

var omnibool = {val: "whatAKata", valueOf: (val) => (this.val = !this.val)}

