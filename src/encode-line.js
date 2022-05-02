//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let letters = new Map();

  str = str.split('');
  let res = '';

  if (str == '') {
    return '';
  } else {

    for (let i = 0; i < str.length; i++) {
      if (str[i] == str[i + 1] || str[i] == str[i - 1]) {
        if (letters.has(str[i])) {
          let prevValue = letters.get(str[i]);
          letters.set(str[i], prevValue + 1);
        } else {
          letters.set(str[i], 1);
        }


      }



  

    }
    

    letters.forEach((value, key, map) => {
      res = res + value + key;
    });

    console.log(res);
    return res;


  }







}

encodeLine('aaaatttt');
encodeLine('aabbccc');
encodeLine('abbcca');
encodeLine('xyz');
encodeLine('');



/* 
module.exports = {
  encodeLine
};
 */