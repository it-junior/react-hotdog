import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, Wrapper } from './App.styled';
import { RoutesConstants } from './routes';
import { MainPage } from '../../pages/MainPage/MainPage';
import { OrderFormPage } from '../../pages/OrderFormPage/OrderFormPage';
import { OrderPage } from '../../pages/OrderPage/OrderPage';
import { theme } from '../../styles/theme';
import { Header } from '../Header/Header';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={renderLayout()}>
          <Route path="/" element={<MainPage />} />
          <Route path={RoutesConstants.OrderForm} element={<OrderFormPage />} />
          <Route path={`${RoutesConstants.Order}/:id`} element={<OrderPage />} />
          <Route path="*/orders" element={<div>заказ</div>} />
          <Route path="*" element={<div>Страница не найдена</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

  function renderLayout() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />
          <Outlet />
        </Wrapper>
        <GlobalStyle />
      </ThemeProvider>
    );
  }
};
