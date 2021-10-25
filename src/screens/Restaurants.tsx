import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/RestaurantInfo';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
`;

const SearchSection = styled.View`
  padding: 15px;
`;

const RestaurantList = styled.View`
  flex: 1;
  background-color: blue;
  padding: 15px;
`;

export const Restaurants = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView>
      <SearchSection>
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </SearchSection>
      <RestaurantList>
        <RestaurantInfo />
      </RestaurantList>
    </SafeAreaView>
  );
};
