import React, { FC, Children, useEffect, useCallback } from 'react';
import Block from './block';
import { Container, Row } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { createGrid, IReducer, selectBlock } from 'reducers';
import { INDEX, BLOCK_COORD } from 'typings';
import useMousetrap from 'react-hook-mousetrap';

interface IState {
  selectedBlock?: BLOCK_COORD;
}

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(({ selectedBlock }) => ({
    selectedBlock,
  }));
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);
  useEffect(() => {
    create();
  }, [create]);

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

  useMousetrap('down', moveDown);
  useMousetrap('right', moveRight);
  useMousetrap('up', moveUp);
  useMousetrap('left', moveLeft);
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
