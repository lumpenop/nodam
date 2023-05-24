import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import MainHeader from 'src/components/Header/main.header';

interface Props {
  title: string;
}

const MainLayout: React.FC<PropsWithChildren<Props>> = ({title, children}) => {
  return (
    <View style={{flex: 1, paddingVertical: 30, paddingHorizontal: 20}}>
      <MainHeader title={title} />
      <View style={{marginHorizontal: 8, gap: 30, marginTop: 20}}>
        {children}
      </View>
    </View>
  );
};

export default MainLayout;
