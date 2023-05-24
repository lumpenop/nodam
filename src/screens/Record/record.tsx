import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MainLayout from 'src/components/Layout/main.layout';

const Record = () => {
  return (
    <MainLayout title={'record'}>
      <Text>Record hi</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default Record;
