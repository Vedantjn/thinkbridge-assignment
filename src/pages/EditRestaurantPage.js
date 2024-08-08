import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import RestaurantForm from '../components/RestaurantForm';
import { getRestaurant, updateRestaurant } from '../services/api';

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

const LoadingText = styled.div`
  font-size: 18px;
  text-align: center;
`;

const ErrorText = styled.div`
  color: #B43F3F;
  font-size: 18px;
  text-align: center;
  margin-top: 32px;
`;

const EditRestaurantPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        if (id) {
          const data = await getRestaurant(id);
          setRestaurant(data);
        }
      } catch (err) {
        console.error('Error fetching restaurant:', err);
        setError('Restaurant not found');
      }
    };

    fetchRestaurant();
  }, [id]);

  const handleSubmit = async (updatedRestaurant) => {
    try {
      if (id) {
        await updateRestaurant(id, updatedRestaurant);
        navigate('/restaurants');
      }
    } catch (err) {
      console.error('Error updating restaurant:', err);
      setError('Error updating restaurant');
    }
  };

  if (error) {
    return (
      <Container>
        <ErrorText>{error}</ErrorText>
      </Container>
    );
  }

  if (!restaurant) {
    return <LoadingText>Loading...</LoadingText>;
  }

  return (
    <Container>
      <Title>Edit Restaurant</Title>
      <RestaurantForm initialValues={restaurant} onSubmit={handleSubmit} />
    </Container>
  );
};

export default EditRestaurantPage;