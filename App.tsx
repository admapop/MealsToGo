// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from './src/infrastructure/theme';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { Restaurants } from './src/screens/Restaurants';

const Tab = createBottomTabNavigator();

enum IconNames {
  Restaurant = 'Restaurants',
  Map = 'Map',
  Settings = 'Settings',
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  function Map() {
    return <Text>Map</Text>;
  }
  function Settings() {
    return <Text>Settings</Text>;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              const { name } = route;
              switch (name) {
                case IconNames.Restaurant:
                  return (
                    <Ionicons
                      name={focused ? 'restaurant' : 'restaurant-outline'}
                      size={size}
                      color={color}
                    />
                  );

                case IconNames.Map:
                  return (
                    <Ionicons
                      name={focused ? 'map' : 'map-outline'}
                      size={size}
                      color={color}
                    />
                  );

                default:
                  return (
                    <Ionicons
                      name={focused ? 'settings' : 'settings-outline'}
                      size={size}
                      color={color}
                    />
                  );
              }
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Restaurants" component={Restaurants} />
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
