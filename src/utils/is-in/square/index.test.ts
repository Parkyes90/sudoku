import { SQAURE } from 'typings';

import isInSquare from './';

describe('isInSquare', () => {
  it('returns true when value is in grid sqaure', () => {
    const square: SQAURE = [
      [1, 3, 4],
      [8, 2, 7],
      [6, 9, 5],
    ];

    expect(isInSquare({ square, value: 1 })).toBeTruthy();
    expect(isInSquare({ square, value: 9 })).toBeTruthy();
  });

  it('returns true when value is in grid sqaure', () => {
    const square: SQAURE = [
      [1, 4, 4],
      [8, 2, 7],
      [6, 9, 6],
    ];

    expect(isInSquare({ square, value: 3 })).toBeFalsy();
    expect(isInSquare({ square, value: 5 })).toBeFalsy();
  });
});
