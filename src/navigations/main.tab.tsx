import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Home from 'src/screens/Home/home';
import MyPage from 'src/screens/MyPage/my.page';
import Record from 'src/screens/Record/record';
import Tips from 'src/screens/Tips/tips';

const MainTab = () => {
  const Tab = createBottomTabNavigator<MainTabParamsType>();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#6200ee',
      }}>
      <Tab.Screen
        name={'HomeStack'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Text style={{color}}>Home</Text>,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'RecordStack'}
        component={Record}
        options={{
          tabBarIcon: ({color}) => <Text style={{color}}>Record</Text>,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'TipsStack'}
        component={Tips}
        options={{
          tabBarIcon: ({color}) => <Text style={{color}}>Record</Text>,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'MyPageStack'}
        component={MyPage}
        options={{
          tabBarIcon: ({color}) => <Text style={{color}}>Record</Text>,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default MainTab;
