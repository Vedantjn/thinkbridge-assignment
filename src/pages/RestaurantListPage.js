import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import RestaurantList from '../components/RestaurantList';
import { getRestaurants, deleteRestaurant } from '../services/api';

const Container = styled.div`
  max-width: 1200px;
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

const AddButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  background-color: #FF8225;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-bottom: 32px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #B43F3F;
  }
`;

// const ButtonContainer = styled.div`
//   text-align: center;
//   margin-bottom: 32px;
// `;

const RestaurantListPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await getRestaurants();
      setRestaurants(data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/restaurants/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await deleteRestaurant(id);
      setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  return (
    <Container>
      <Title>Restaurants</Title>
      <AddButton to="/restaurants/add">Add New Restaurant</AddButton>
      <RestaurantList restaurants={restaurants} onEdit={handleEdit} onDelete={handleDelete} />
    </Container>
  );
};

export default RestaurantListPage;