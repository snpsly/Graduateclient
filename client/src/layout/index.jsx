import {View, Text, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../views/home/index';
import MessageScreen from '../views/message/index';
import ShoppingScreen from '../views/shopping/index';
import MeScreen from '../views/me/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import store from '../store/reduxstore';
import HomeClearScreen from '../views/clearhome/index';
import ClearOrdersScreen from '../views/clearorders/index';
const Index = () => {
  const Tab = createBottomTabNavigator();
  const {identity} = store.getState().userReducer;
  return (
    <>
      <StatusBar backgroundColor={'#FFCF07'} />
      {identity === 0 ? (
        <Tab.Navigator
          screenOptions={({route}) => ({
            header: () => {
              return null;
            },
            title:
              route.name === 'Home'
                ? '首页'
                : route.name === 'Message'
                ? '客服'
                : route.name === 'Shopping'
                ? '订单'
                : '我的',
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home-sharp' : 'home-outline';
              } else if (route.name === 'Message') {
                iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              } else if (route.name === 'Shopping') {
                iconName = focused ? 'md-menu-sharp' : 'md-menu-outline';
              } else {
                iconName = focused ? 'happy' : 'happy-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#FFCF07',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />

          <Tab.Screen name="Message" component={MessageScreen} />

          <Tab.Screen name="Shopping" component={ShoppingScreen} />
          <Tab.Screen name="Me" component={MeScreen} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={({route}) => ({
            header: () => {
              return null;
            },
            title:
              route.name === 'HomeClear'
                ? '订单大厅'
                : route.name === 'ClearOrder'
                ? '我的订单'
                : '我的',
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'HomeClear') {
                iconName = focused ? 'home-sharp' : 'home-outline';
              } else if (route.name === 'ClearOrder') {
                iconName = focused ? 'md-menu-sharp' : 'md-menu-outline';
              } else {
                iconName = focused ? 'happy' : 'happy-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#FFCF07',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="ClearOrder" component={ClearOrdersScreen} />
          <Tab.Screen name="Me" component={MeScreen} />
        </Tab.Navigator>
      )}
    </>
  );
};

export default Index;
