import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Record from 'src/screens/Record/record';
import RecordWrite from 'src/screens/Record/RecordWrite';

const RecordStack = () => {
  const Stack = createStackNavigator<RecordStackParamsType>();
  return (
    <Stack.Navigator
      initialRouteName={'Record'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Record'} component={Record} />
      <Stack.Screen name={'RecordWrite'} component={RecordWrite} />
    </Stack.Navigator>
  );
};

export default RecordStack;
