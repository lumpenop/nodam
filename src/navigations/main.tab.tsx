import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import HomeStack from 'src/navigations/home.stack';
import RecordStack from 'src/navigations/record.stack';
import Home from 'src/screens/Home/home';
import MyPage from 'src/screens/MyPage/my.page';
import Record from 'src/screens/Record/record';
import Tips from 'src/screens/Tips/tips';
import HomeIcon from 'src/assets/svgs/home.svg';
import CalendarIcon from 'src/assets/svgs/calendar.svg';
import CoffeeIcon from 'src/assets/svgs/coffee.svg';
import GithubIcon from 'src/assets/svgs/github.svg';

const MainTab = () => {
  const Tab = createMaterialBottomTabNavigator<MainTabParamsType>();
  const size = 30;
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      barStyle={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name={'HomeStack'}
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <HomeIcon color={color} width={size} />,
        }}
      />
      <Tab.Screen
        name={'RecordStack'}
        component={RecordStack}
        options={{
          tabBarLabel: 'Record',
          tabBarIcon: ({color}) => <CalendarIcon color={color} width={size} />,
        }}
      />
      <Tab.Screen
        name={'TipsStack'}
        component={Tips}
        options={{
          tabBarLabel: 'Tips',
          tabBarIcon: ({color}) => <CoffeeIcon color={color} width={size} />,
        }}
      />
      <Tab.Screen
        name={'MyPageStack'}
        component={MyPage}
        options={{
          tabBarLabel: 'My',
          tabBarIcon: ({color}) => <GithubIcon color={color} width={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default MainTab;
