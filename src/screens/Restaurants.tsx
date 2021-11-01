import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/RestaurantInfo';
import { SafeAreaView } from '../components/SafeAreaView';

const SearchSection = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

const RestaurantList = styled.FlatList`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  padding: ${({ theme }) => theme.space[3]};
`;

const RestaurantCardWrapper = styled.View`
  margin-bottom: ${({ theme }) => theme.space[3]};
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
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => (
          <RestaurantCardWrapper>
            <RestaurantInfo />
          </RestaurantCardWrapper>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};
