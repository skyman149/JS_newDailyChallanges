/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value 
to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let xStr = (x+'').split('').reverse().join('');
    let res = x < 0 ? '-' + (xStr + '').slice(0, -1) : +xStr;
    
    return (-2)**31 > res || res > 2**31 - 1 ? 0 : +res;
}