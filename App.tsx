import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as JotaiProvider} from 'jotai';
import RootStack from 'src/navigations/root.stack';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#2A2C40',
  },
};

const App = () => {
  return (
    <JotaiProvider>
      <NavigationContainer theme={MyTheme}>
        <StatusBar hidden />
        <RootStack />
      </NavigationContainer>
    </JotaiProvider>
  );
};

export default App;
