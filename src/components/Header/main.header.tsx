import React from 'react';
import {View, Text} from 'react-native';
import ArrowLeft from 'src/assets/svgs/arrow-left.svg';

interface Props {
  title: string;
  icon?: boolean;
}
const MainHeader: React.FC<Props> = ({title, icon}) => {
  const size = 30;
  return (
    <View
      style={{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: size, fontWeight: 'bold'}}>{title}</Text>
      {icon && <ArrowLeft height={size} width={size} />}
    </View>
  );
};

export default MainHeader;
