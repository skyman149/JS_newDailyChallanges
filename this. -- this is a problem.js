function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = `${this.firstName} ${this.lastName}`;
}

// OR

function NameMe(first, last) {
    return { 
      firstName : first,
      lastName : last,
      name: `${this.firstName} ${this.lastName}`
   }
}