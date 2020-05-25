import { GRID } from 'typings';
import isInCol from './index';

describe('isInCol', () => {
  const grid: GRID = [
    [8, 4, 2, 6, 5, 1, 3, 9, 7],
    [5, 3, 7, 2, 8, 9, 6, 4, 1],
    [6, 9, 1, 7, 3, 4, 5, 2, 8],
    [1, 6, 3, 8, 4, 5, 9, 7, 2],
    [7, 5, 7, 1, 9, 2, 4, 6, 3],
    [9, 2, 4, 3, 7, 6, 1, 8, 5],
    [4, 7, 6, 5, 1, 8, 2, 3, 9],
    [2, 8, 5, 9, 6, 3, 7, 1, 4],
    [3, 1, 9, 3, 1, 7, 8, 5, 6],
  ];
  it('it returns true when value is in grid columns', () => {
    expect(isInCol({ col: 0, grid, value: 9 })).toBeTruthy();
    expect(isInCol({ col: 5, grid, value: 9 })).toBeTruthy();
    expect(isInCol({ col: 8, grid, value: 9 })).toBeTruthy();
  });
  it('it returns false when value in not in grid column', () => {
    expect(isInCol({ col: 2, grid, value: 8 })).toBeFalsy();
    expect(isInCol({ col: 4, grid, value: 2 })).toBeFalsy();
  });
});
