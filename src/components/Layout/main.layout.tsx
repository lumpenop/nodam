import {useRoute} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import MainHeader from 'src/components/Header/main.header';

const MainLayout: React.FC<PropsWithChildren> = ({children}) => {
  const route = useRoute();
  return (
    <View style={{flex: 1}}>
      <MainHeader title={route.name} />
      <View style={{marginTop: 20}}>{children}</View>
    </View>
  );
};

export default MainLayout;
