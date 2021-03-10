function reverser(sentence) {
	
    return sentence.split(" ").map(el => el.split("").reverse().join("")).join(" ");
    
  }