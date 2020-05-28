import React, { FC } from 'react';
import useMousetrap from 'react-hook-mousetrap';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { IReducer, selectBlock } from 'reducers';
import { Container } from './styles';
import { N, INDEX } from 'typings';

interface IProps {
  colIndex: INDEX;
  rowIndex: INDEX;
}

interface IState {
  value: N;
  isActive: boolean;
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(({ grid, selectedBlock }) => ({
    isActive: selectedBlock
      ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
      : false,
    value: grid ? grid[rowIndex][colIndex] : 0,
  }));
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  function handleClick() {
    if (!state.isActive) {
      dispatch(selectBlock([rowIndex, colIndex]));
    }
  }

  function moveDown() {
    console.log('down');
  }

  function moveRight() {
    console.log('right');
  }

  function moveUp() {
    console.log('up');
  }

  function moveLeft() {
    console.log('left');
  }

  useMousetrap('down', moveDown);
  useMousetrap('right', moveRight);
  useMousetrap('up', moveUp);
  useMousetrap('left', moveLeft);
  return (
    <Container
      active={state.isActive}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  );
};

export default Block;
