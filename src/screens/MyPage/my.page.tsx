import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MainLayout from 'src/components/Layout/main.layout';

const MyPage = () => {
  return (
    <MainLayout title={'my page'}>
      <Text>MyPage hi</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default MyPage;
