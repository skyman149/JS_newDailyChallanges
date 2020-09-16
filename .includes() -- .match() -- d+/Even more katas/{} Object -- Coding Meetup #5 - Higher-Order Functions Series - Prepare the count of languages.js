/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
*/

function countLanguages(list) {
    return list.reduce((languages, { language }) => ((languages[language] = (languages[language] || 0) + 1), languages), {})
    }

//OR

function countLanguages(list) {
  let obj = {};
  list.map(el => obj[el.language] = (obj[el.language]||0) + 1);
  return obj; 
}

//OR

function countLanguages(list) {
    let langCount = {};
    for (var i = 0; i < list.length; i++) {
      if (langCount[list[i].language]) {
        langCount[list[i].language]++;
      } else {
        langCount[list[i].language] = 1;
      };
    };
    return langCount;
  }