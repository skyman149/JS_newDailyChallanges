/*
Напишите функцию с именем polygonName, которая принимает целое число n 
в качестве аргумента (число от 3 до 10 - количество вершин многоугольника) и 
возвращает название многоугольника. Если аргументом является число, 
меньшее 3 или большее 10, функция должна вернуть значение undefined. 
В решении необходимо использовать оператор switch.
*/

function polygonName(n){
    let c;
    switch (n){
      case 3: c = 'triangle'; break;
      case 4: c = 'square'; break;
      case 5: c = 'pentagon'; break;
      case 6: c = 'hexagon'; break;
      case 7: c = 'heptagon'; break;
      case 8: c = 'octahedron'; break;
      case 9: c = 'nonagon'; break;
      case 10: c = 'decagon'; break;
      default: c = undefined;
    }
    return c;
  }
  console.log(polygonName(0)); //undefined
  console.log(polygonName(3)); //"triangle"
  console.log(polygonName(10)); //"decagon"