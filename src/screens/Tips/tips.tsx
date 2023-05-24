import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MainLayout from 'src/components/Layout/main.layout';

const Tips = () => {
  return (
    <MainLayout title={'tips'}>
      <Text>Tips hi</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default Tips;
