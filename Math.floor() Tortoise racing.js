/*
Two tortoises named A and B must run a race. A starts with an average speed of 
720 feet per hour. Young B knows she runs faster than A, and furthermore has not 
finished her cabbage.
When she starts, at last, she can see that A has a 70 feet lead but B's speed 
is 850 feet per hour. How long will it take B to catch A?
More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, 
integer > 0) and a lead g (integer > 0) how long will it take B to catch A?
The result will be an array [hour, min, sec] which is the time needed in hours,
minutes and seconds (round down to the nearest second) or a string in some 
languages.

If v1 >= v2 then return nil, nothing, null or None
Examples:
race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
** Note:
** Hints for people who don't know how to convert to hours, minutes, seconds:
Tortoises don't care about fractions of seconds
Think of calculation by hand using only integers 
(in your code use or simulate integer division)
or Google: "convert decimal time to hours minutes seconds"
*/

function race(v1, v2, g) {
    if(v1 >= v2) {return null;}
    let decimalTime = Math.floor(g / (v2 - v1) * 3600);
    let h = Math.floor(decimalTime / 3600);
    let m = Math.floor((decimalTime - h * 3600) / 60);
    let s = Math.floor(decimalTime - h * 3600 - m * 60);
    return [h, m, s];
}
//console.log(race(720, 850, 70)); //[0, 32, 18]
//console.log(race(80, 91, 37)); //[3, 21, 49]