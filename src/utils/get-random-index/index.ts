/**
 * Return a random sudoku grid index in the 0 = 8 range
 */
function getRandomIndex() {
  return Math.floor(Math.random() * 9);
}

export default getRandomIndex;
