const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let letters = new Map();
  s1 = s1.split('').sort();
  s2 = s2.split('').sort();


  if (s1 == '' || s2 == '') {
    return 0;
  } else {
    for (let i = 0; i < s1.length; i++) {

      if (s2.includes(s1[i])) {
        let index = s2.indexOf(s1[i]);
        s2.splice(index,1);
        
        if (letters.has(s1[i])) {
          let prevValue = letters.get(s1[i]);
          letters.set(s1[i], prevValue + 1);
        } else {

          letters.set(s1[i], 1);
        }
      }

    }
    let res = 0;
    for (let amount of letters.values()) {
      res = res + amount;
    }

    return res;
  }


}


 module.exports = {
  getCommonCharacterCount
};
