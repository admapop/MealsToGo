import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
