const quarterOf = (month) => {
    if(month >= 1 && month <=3){return 1}
    if(month >= 4 && month <=6){return 2}
    if(month >= 7 && month <=9){return 3}
    else {return 4}
  }