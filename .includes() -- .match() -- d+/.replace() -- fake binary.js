function fakeBin(x){
    return x.replace(/./g, el => el < 5? 0 : 1);
  }

  // replace 0-4 -> 0, 5-9 -> 1