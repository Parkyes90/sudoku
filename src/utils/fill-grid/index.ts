import { GRID, NUMBERS } from 'typings';
import { shuffle } from 'utils';
import { isInRow, isInCol } from 'utils/is-in';

const grid: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A backtracking/recursive function do check all the possible combinations of numbers a solution is found
 * @param grid  9X9 Sudoku Grid
 */
function fillGrid(grid: GRID) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      shuffle(numbers);
      for (let value of numbers) {
        // is it not in grid row?
        if (!isInRow({ grid, row, value })) {
          if (isInCol({ col, grid, value })) {
            grid[row][col] = value;
            // is it not in ther grid sqaure?
            // check grid if it is full, if yes, stop and return
            // otherwise we run fillGrid(grid)
          }
        }
      }
      break;
    }
  }
  grid[row][col] = 0;
}

export default fillGrid;
