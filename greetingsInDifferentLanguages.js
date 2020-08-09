/*
Напишите функцию с именем greetings, которая в качестве аргументов принимает 
имя человека name и язык language и возвращает приветствие типа "Hello name!" 
на указанном языке. Если аргументом является язык, не входящий в словарь, 
функция должна вернуть приветствие на английском языке.
*/

function greetings(name, language){
    switch(language){
      case 'German': return `Hallo ${name}!`;
      case 'French': return `Bonjour ${name}!`;
      case 'Spanish': return `Hola ${name}!`;
      case 'Italian': return `Saluto ${name}!`;
      case 'Russian': return `Привет ${name}!`;
      case 'Czech': return `Nazdar ${name}!`;
      default: return `Hello ${name}!`
    }
  }
  console.log(greetings('Ann','Chinese')); //"Hello Ann!"
  console.log(greetings('Peter','German'));//"Hallo Peter!"
  console.log(greetings('Milana','Russian'));//"Привет Milana!"
  console.log(greetings('Italian','Italian'));//"Saluto Italian!"