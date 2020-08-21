function yourFutureCareer(){
    let ran = Math.random();
    let career = +(ran.toFixed(2));
    if (career <= 0.32){
      return 'FrontEnd Developer';
    }
    if (career <= 0.65){
      return 'BackEnd Developer';
    } 
    if (career > 0.65){
      return 'Full-Stack Developer';
    }
  }
  console.log(yourFutureCareer());
  
  