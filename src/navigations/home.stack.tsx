import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'src/screens/Home/home';

const HomeStack = () => {
  const Stack = createStackNavigator<HomeStackParamsType>();
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Home'} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
