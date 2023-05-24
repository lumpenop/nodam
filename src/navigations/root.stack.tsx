import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from 'src/navigations/main.tab';

const RootStack = () => {
  const Stack = createStackNavigator<RootStackParamsType>();
  return (
    <Stack.Navigator
      initialRouteName={'MainTab'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'MainTab'} component={MainTab} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default RootStack;
