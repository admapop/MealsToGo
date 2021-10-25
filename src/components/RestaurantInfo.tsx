import React from 'react';
import styled from 'styled-components/native';
import { Card, Title } from 'react-native-paper';

const RestaurantCard = styled(Card)`
  background-color: white;
  padding: 10px;
`;

const CardCover = styled(Card.Cover)`
  background-color: white;
`;

const CardTitle = styled(Title)`
  color: red;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/2560px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
    ],
    address = 'some random street',
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <CardTitle>{name}</CardTitle>
    </RestaurantCard>
  );
};
