/*
Every now and then people in the office moves teams or departments. 
Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, 
and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/

function boredom(staff){
    const boredomScore = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  }
    const teamScore = Object.values(staff)
      .map(department => boredomScore[department])
      .reduce((total, value) => total + value, 0)
    if (teamScore <= 80) return 'kill me now'
    if (teamScore < 100 && teamScore > 80) return 'i can handle this'
    return 'party time!!'
  }

  // OR

  function boredom(staff){
    var sum = 0;
    for (let key in staff){
      if (staff[key] ==='accounts')      sum += 1;
      if (staff[key] ==='finance')       sum += 2;
      if (staff[key] ==='canteen')       sum += 10;
      if (staff[key] ==='regulation')    sum += 3;
      if (staff[key] ==='trading')       sum += 6;
      if (staff[key] ==='change')        sum += 6;
      if (staff[key] ==='IS')            sum += 8;
      if (staff[key] ==='retail')        sum += 5;
      if (staff[key] ==='cleaning')      sum += 4;
      if (staff[key] ==='pissing about') sum += 25;
    }
    return sum <= 80 ? 'kill me now' : sum >= 100 ? 'party time!!' : 'i can handle this';
  }