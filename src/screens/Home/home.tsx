import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}} edges={['top']}>
      <Text>Home hi</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default Home;
