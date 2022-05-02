//const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
 let newMatrix = [...matrix];
 
  newMatrix.forEach(m => {
    for (let i = 0; i < m.length; i++) {
     m[i] == true ? m[i] = 2 : m[i] = 1;
      
    }
  });
  console.log(newMatrix);
  return newMatrix;
}

minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]);


/* module.exports = {
  minesweeper
};
 */