import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { Content, Title, Card, Grid } from './components';
import { unregister, configureStore } from 'core';
import { GlobalStyles, theme } from './styles';

const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <Content data-cy="content">
          <Title data-cy="title">Sudoku</Title>
          <Card data-cy="card">
            <Grid />
          </Card>
        </Content>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

unregister();
