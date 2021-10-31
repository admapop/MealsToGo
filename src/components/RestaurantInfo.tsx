import React from 'react';
import styled from 'styled-components/native';
import { Card, Title } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import starSvg from '../../assets/star';
import openSvg from '../../assets/open';

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

const RowEnd = styled.View`
  margin-left: auto;
  flex-direction: row;
  align-items: center;
`;

const ClosedLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text.error};
`;

const StyledOpen = styled(SvgXml)`
  margin-left: ${({ theme }) => theme.space[3]};
`;

const StyledImage = styled.Image`
  width: 15px;
  height: 15px;
  margin-left: ${({ theme }) => theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.body};
`;

type RestaurantInfo = {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
};

export const RestaurantInfo = ({
  name = 'Some Restaurant',
  icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
  photos = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/2560px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
  ],
  address = 'some random street',
  isOpenNow = true,
  rating = 4.5,
  isClosedTemporarily = true,
}: RestaurantInfo) => {
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <CardTitle>{name}</CardTitle>
        <Row>
          {ratingArray.map((_, i) => (
            <SvgXml key={i} xml={starSvg} width={20} height={20} />
          ))}
          <RowEnd>
            {isClosedTemporarily && (
              <ClosedLabel>CLOSED TEMPORARILY</ClosedLabel>
            )}
            {isOpenNow && <StyledOpen xml={openSvg} width={20} height={20} />}
            <StyledImage source={{ uri: icon }} />
          </RowEnd>
        </Row>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
