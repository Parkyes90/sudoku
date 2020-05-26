import React, { FC, Children } from 'react';
import Block from './block';
import { Container, Row } from './styles';
import { createFullGrid } from 'utils';

const Grid: FC = () => {
  const grid = createFullGrid();
  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((arrayItem, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((arrayItem, colIndex) => (
                <Block rowIndex={rowIndex} colIndex={colIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
