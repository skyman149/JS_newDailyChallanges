function validPassword(password){
    if (password.length >= 7) {return password}
    else {return password.padEnd(7, '$')}
  }