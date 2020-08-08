//Запишите функцию с именем workdayOrWeekend, которая принимает число day в 
//качестве аргумента (число от 1 до 7 - номер дня недели) и возвращает строку 
//"Work day", если день недели 1, 2, 3, 4, 5 или "Weekend", если день недели 
//6, 7. Если аргументом является число, меньшее 1 или большее 7, функция должна
// вернуть строку "Wrong input".
//В решении необходимо использовать оператор switch.

function workdayOrWeekend(day){
    let d;
    switch (day){
      case 1: 
      case 2:
      case 3:
      case 4:
      case 5: d = 'Work day'; break;
      case 6:
      case 7: d = 'Weekend'; break;
      default : d = 'Wrong input'
    }
    return d;
  }
  console.log(workdayOrWeekend(3)); //"Work day"
  console.log(workdayOrWeekend(6)); //"Weekend"
  console.log(workdayOrWeekend(0)); //"Wrong inut"
  