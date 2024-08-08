import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import RestaurantForm from '../components/RestaurantForm';
import { createRestaurant } from '../services/api';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 48px 24px;
`;

const Title = styled.h1`
  font-family: 'Grey Qo', cursive;
  font-size: 48px;
  margin-bottom: 32px;
  text-align: center;
  color: #B43F3F;
`;

const AddRestaurantPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (newRestaurant) => {
    try {
      await createRestaurant(newRestaurant);
      navigate('/restaurants');
    } catch (err) {
      console.error('Error creating restaurant:', err);
      setError('Error creating restaurant');
    }
  };

  return (
    <Container>
      <Title>Add New Restaurant</Title>
      {error && <div>{error}</div>}
      <RestaurantForm onSubmit={handleSubmit} />
    </Container>
  );
};

export default AddRestaurantPage;