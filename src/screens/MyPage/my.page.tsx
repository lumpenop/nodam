import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MainLayout from 'src/components/Layout/main.layout';

const MyPage = () => {
  const menus = [
    '내정보',
    'view',
    '알림',
    'view',
    '데이터 초기화',
    'view',
    '리뷰 작성하기',
    '앱 공유하기',
  ];
  return (
    <MainLayout>
      <View style={{paddingHorizontal: 20, gap: 10}}>
        {menus.map((item, index) => {
          if (item === 'view') {
            return <View style={{paddingVertical: 10}} key={index} />;
          }
          return (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: 'white',
                paddingVertical: 10,
                borderRadius: 4,
              }}>
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default MyPage;
