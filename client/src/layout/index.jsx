import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../views/home/index';
import MessageScreen from '../views/message/index';
import ShoppingScreen from '../views/shopping/index';
import MeScreen from '../views/me/index';
const Index = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Shopping" component={ShoppingScreen} />
      <Tab.Screen name="Me" component={MeScreen} />
    </Tab.Navigator>
  );
};

export default Index;
