import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Index from './index';
import Detail from '../views/detail';
import PlaceOrder from '../views/placeorder';
const Stack = createNativeStackNavigator();
const AppRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IndexHome"
        component={Index}
        options={{
          header: () => {
            return null;
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          header: () => {
            return null;
          },
        }}
      />
      <Stack.Screen
        name="PlaceOrder"
        component={PlaceOrder}
        options={{
          header: () => {
            return null;
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRouter;
