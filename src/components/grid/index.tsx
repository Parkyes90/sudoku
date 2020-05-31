import React, { FC, Children, useEffect, useCallback } from 'react';
import Block from './block';
import { Container, Row } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { createGrid, IReducer, selectBlock, fillBlock } from 'reducers';
import { INDEX, BLOCK_COORD, NUMBERS, N, GRID } from 'typings';
import useMousetrap from 'react-hook-mousetrap';

interface IState {
  selectedBlock?: BLOCK_COORD;
  selectedValue: N;
  solvedGrid?: GRID;
}

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, workingGrid, solvedGrid }) => ({
      selectedBlock,
      solvedGrid,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  );
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);
  const fill = useCallback(
    (n: NUMBERS) => {
      if (state.selectedBlock && state.selectedValue === 0) {
        dispatch(fillBlock(n, state.selectedBlock));
      }
    },
    [dispatch, state.selectedValue, state.selectedBlock]
  );
  function moveDown() {
    if (state.selectedBlock && state.selectedBlock[0] < 8) {
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as INDEX,
          state.selectedBlock[1],
        ])
      );
    }
  }

  function moveRight() {
    if (state.selectedBlock && state.selectedBlock[1] < 8) {
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] + 1) as INDEX,
        ])
      );
    }
  }

  function moveUp() {
    if (state.selectedBlock && state.selectedBlock[0] > 0) {
      dispatch(
        selectBlock([
          (state.selectedBlock[0] - 1) as INDEX,
          state.selectedBlock[1],
        ])
      );
    }
  }

  function moveLeft() {
    if (state.selectedBlock && state.selectedBlock[1] > 0) {
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] - 1) as INDEX,
        ])
      );
    }
  }

  useMousetrap('1', () => fill(1));
  useMousetrap('2', () => fill(2));
  useMousetrap('3', () => fill(3));
  useMousetrap('4', () => fill(4));
  useMousetrap('5', () => fill(5));
  useMousetrap('6', () => fill(6));
  useMousetrap('7', () => fill(7));
  useMousetrap('8', () => fill(8));
  useMousetrap('9', () => fill(9));

  useMousetrap('down', moveDown);
  useMousetrap('right', moveRight);
  useMousetrap('up', moveUp);
  useMousetrap('left', moveLeft);

  useEffect(() => {
    if (!state.solvedGrid) {
      create();
    }
  }, [create, state.solvedGrid]);
  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((arrayItem, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((arrayItem, colIndex) => (
                <Block
                  rowIndex={rowIndex as INDEX}
                  colIndex={colIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
