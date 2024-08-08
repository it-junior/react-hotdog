import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, Wrapper } from './App.styled';
import { theme } from '../../styles/theme';
import { Header } from '../Header/Header';
import { Products } from '../Products/Products';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <body>
          <Products />
        </body>
      </Wrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
};
