const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString();
  let newArr = [];

  if (n.length <= 2) {
    console.log(Math.max(...n));
    return Math.max(...n);
  } else {
    let str;
    for (let i = 1; i < n.length; i++) {

      str = n.substring(0, i - 1) + n.substring(i, n.length);
      newArr.push(+str);
    }
    console.log(Math.max(...newArr));
    return Math.max(...newArr);
  }


}

 module.exports = {
  deleteDigit
}; 

