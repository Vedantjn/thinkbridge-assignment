import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RestaurantListPage from './pages/RestaurantListPage';
import AddRestaurantPage from './pages/AddRestaurantPage';
import EditRestaurantPage from './pages/EditRestaurantPage';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Grey+Qo&family=Poppins:wght@400;600&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F8EDED;
    color: #173B45;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Grey Qo', cursive;
    color: #B43F3F;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants" element={<RestaurantListPage />} />
          <Route path="/restaurants/add" element={<AddRestaurantPage />} />
          <Route path="/restaurants/edit/:id" element={<EditRestaurantPage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;