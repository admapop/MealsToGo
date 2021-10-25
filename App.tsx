// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { Restaurants } from './src/screens/Restaurants';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Restaurants />
      </ThemeProvider>
    </>
  );
}
