import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; // Import Stack from React Navigation
import HomeHeader from './components/HomeHeader'; // Assuming you have a HomeHeader component
import Home from './screens/Home'; // Import the Home screen

const Stack = createStackNavigator();

export default function Layout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home} // Assuming the Home screen is defined elsewhere
        options={{
          header: () => <HomeHeader /> // Custom header
        }}
      />
    </Stack.Navigator>
  );
}
