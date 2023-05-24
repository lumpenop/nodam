import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as JotaiProvider} from 'jotai';
import RootStack from 'src/navigations/root.stack';

const App = () => {
  return (
    <JotaiProvider>
      <NavigationContainer>
        <StatusBar hidden />
        <RootStack />
      </NavigationContainer>
    </JotaiProvider>
  );
};

export default App;
