import React from 'react';
import styled from 'styled-components';
import RestaurantItem from './RestaurantItem';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  justify-content: center;
`;

const RestaurantList = ({ restaurants, onEdit, onDelete }) => {
  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const restaurantChunks = chunkArray(restaurants, 3);

  return (
    <Grid>
      {restaurantChunks.map((chunk, index) => (
        <React.Fragment key={index}>
          {chunk.map((restaurant) => (
            <RestaurantItem
              key={restaurant.id}
              restaurant={restaurant}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default RestaurantList;