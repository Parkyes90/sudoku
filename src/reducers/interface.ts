import { GRID, BLOCK_COORD } from 'typings';

export interface IReducer {
  challengeGrid?: GRID;
  selectedBlock?: BLOCK_COORD;
  solvedGrid?: GRID;
  workingGrid?: GRID;
}
