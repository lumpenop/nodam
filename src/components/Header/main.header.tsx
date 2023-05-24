import React, {PropsWithChildren} from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface Props {
  title: string;
}
const MainHeader: React.FC<Props> = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default MainHeader;
