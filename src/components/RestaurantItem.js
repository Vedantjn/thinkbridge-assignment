import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import ImageCarousel from './ImageCarousel';

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.25);
  }
`;

const Title = styled.h2`
  font-family: 'Grey Qo', cursive;
  font-size: 32px;
  margin-bottom: 16px;
  color: #B43F3F;
  text-align: center;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 16px;
  text-align: center;
`;

const Info = styled.div`
  margin: 8px 0;
  color: #173B45;
  display: flex;
  align-items: center;
`;

const Key = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RatingValue = styled.span`
  margin-right: 4px;
`;

const RatingIcon = styled(FaStar)`
  color: #ffc107;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
`;


const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
  &:disabled {
    pointer-events: none;
  }
  &:hover {
    color: #fff;
    background-color: #1A1A1A;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

const EditButton = styled(Button)``;

const DeleteButton = styled(Button)``;

const RestaurantItem = ({ restaurant, onEdit, onDelete }) => {
  return (
    <Card>
      {restaurant.images && restaurant.images.length > 0 ? (
        <ImageCarousel images={restaurant.images} />
      ) : (
        <ImageCarousel images={[
          '/images/default1.jpeg',
          '/images/default2.jpeg',
          '/images/default3.jpeg'
        ]} />
      )}
      <Title>{restaurant.name}</Title>
      <Description>{restaurant.description}</Description>
      <Info>
        <Key>Location:</Key>
        <span>{restaurant.location}</span>
      </Info>
      <Info>
        <Key>Cuisine:</Key>
        <span>{restaurant.cuisine}</span>
      </Info>
      <Info>
        <RatingContainer>
          <Key>Rating:</Key>
          <RatingValue>{restaurant.rating.toFixed(1)}</RatingValue>
          <RatingIcon />
        </RatingContainer>
      </Info>
      <Info>
        <Key>Opening Hours:</Key>
        <span>{restaurant.openingHours}</span>
      </Info>
      <Info>
        <Key>Phone:</Key>
        <span>{restaurant.phoneNumber}</span>
      </Info>
      <ButtonContainer>
        <EditButton onClick={() => onEdit(restaurant.id)}>Edit</EditButton>
        <DeleteButton onClick={() => onDelete(restaurant.id)}>Delete</DeleteButton>
      </ButtonContainer>
    </Card>
  );
};

export default RestaurantItem;