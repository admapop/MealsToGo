import React from 'react';
import styled from 'styled-components/native';
import { Card, Title } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import starSvg from '../../assets/star';

const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  padding: ${({ theme }) => theme.space[2]};
`;

const CardCover = styled(Card.Cover)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

const CardTitle = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.ui.primary};
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.body};
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

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <CardTitle>{name}</CardTitle>
        <Row>
          {ratingArray.map(() => (
            <SvgXml xml={starSvg} width={20} height={20} />
          ))}
        </Row>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
