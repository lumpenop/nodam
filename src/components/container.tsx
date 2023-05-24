import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface Props {
  title: string;
  subject: string;
}

const Container: React.FC<Props> = ({title, subject}) => {
  const titleSize = 20;
  const subjectSize = 18;
  return (
    <View
      style={{
        backgroundColor: '#ececec',
        borderRadius: 4,
        padding: 8,
        gap: 4,
      }}>
      <Text style={{fontSize: titleSize, fontWeight: 'bold'}}>{title}</Text>
      <Text style={{fontSize: subjectSize, fontWeight: '600'}}>{subject}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default Container;
