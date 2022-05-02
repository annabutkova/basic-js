//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let newMatrix = [...matrix];
  let sum = 0;

  newMatrix.forEach(m => {
    for (let i = 0; i < m.length; i++) {

      for (let j = 0; j < m[i].length; j++) {
          console.log(m[i][j]);
        if ((m[i][j + 1]) > 0) {
          
            sum = sum + m[i][j];
            console.log(sum);
        }
      } 
    }
  });
  
  return sum;
}

getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]);

/* module.exports = {
  getMatrixElementsSum
};
 */