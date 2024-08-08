import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8eded;
`;

const Title = styled.h1`
  font-family: 'Grey Qo', cursive;
  font-size: 64px;
  margin-bottom: 24px;
  color: #b43f3f;
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 32px;
  color: #173b45;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  font-size: 18px;
  background-color: #ff8225;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b43f3f;
  }
`;

const HomePage = () => {
  return (
    <Container>
      <Title>Welcome to FOODIEDELIGHT</Title>
      <Paragraph>Manage your restaurants and menus with ease.</Paragraph>
      <Button to="/restaurants">View Restaurants</Button>
    </Container>
  );
};

export default HomePage;