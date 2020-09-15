/*
Create a function that takes two arguments:

1) An array of objects which feature the season, the team and the country of the 
Champions League winner.

2) Country (as a string, for example, 'Portugal')

You function should then return the number which represents the number of times a 
team from a given country has won. Return 0 if there have been no wins.
*/

function countWins(winnerList, country) {
    return winnerList.filter(value => value.country === country).length
  //every time filter see "country" value it adds it to a new array, .length counts how many times value how been added to array
  }

//OR

function countWins(winnerList, country) {
    let sum = 0;
    for(let i = 0; i < winnerList.length; i++)
      if(winnerList[i].country === country)  sum++;
    return sum;
  }