class Dinglemouse{

    constructor( firstName, lastName ){
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    getFullName(){
      return `${this.firstName} ${this.lastName}`.trim();
    }
    
  }
  console.log(new Dinglemouse("Clint", "Eastwood").getFullName());
  console.log(new Dinglemouse("Na", "Hui!").getFullName());
  console.log(new Dinglemouse("Clint", "").getFullName());
  console.log(new Dinglemouse("", "").getFullName());