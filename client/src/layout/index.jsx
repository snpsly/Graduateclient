import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../views/home/index';
import MessageScreen from '../views/message/index';
import ShoppingScreen from '../views/shopping/index';
import MeScreen from '../views/me/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Index = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        header: () => {
          return null;
        },
        title:
          route.name === 'Home'
            ? '首页'
            : route.name === 'Message'
            ? '消息页'
            : route.name === 'Shopping'
            ? '购物车'
            : '我的',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Message') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Shopping') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else {
            iconName = focused ? 'happy' : 'happy-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{tabBarBadge: 3}}
      />
      <Tab.Screen name="Shopping" component={ShoppingScreen} />
      <Tab.Screen name="Me" component={MeScreen} />
    </Tab.Navigator>
  );
};

export default Index;
