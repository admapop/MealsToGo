import React from 'react';

import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

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
    <Card style={styles.card} elevation={5}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Card.Title title={name} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 5,
    backgroundColor: 'white',
  },
  cover: {
    padding: 5,
    backgroundColor: 'white',
  },
});
