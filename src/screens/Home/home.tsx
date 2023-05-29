import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Container from 'src/components/container';

import MainLayout from 'src/components/Layout/main.layout';

const Home = () => {
  return (
    <MainLayout>
      <View
        style={{
          paddingTop: 30,
          paddingHorizontal: 30,
          gap: 30,
        }}>
        <View
          style={{
            backgroundColor: '#bcbcbc',
            padding: 4,
            borderRadius: 4,
          }}>
          <Text>나의 상태</Text>
          <View>
            <Text>hi</Text>
          </View>
        </View>
        <Container title={'금연 기간'} subject={'65일'} />
        <Container title={'절약한 금액'} subject={'65일'} />
        <Container title={'늘어난 수명'} subject={'65일'} />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default Home;
