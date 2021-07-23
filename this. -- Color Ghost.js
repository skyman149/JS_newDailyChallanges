class Ghost {
  
    constructor() {
      this.colors = ['white', 'yellow', 'purple', 'red']
    }
  
    get color() {
      const randomPosition = Math.trunc(Math.random() * this.colors.length)
      return this.colors[randomPosition]
    }
  }

  //

  var Ghost = function() {

    var colors = ["white", "yellow", "purple", "red"];
    var colorIndex = Math.floor(Math.random() * (colors.length));
    this.color = colors[colorIndex];
    
  };