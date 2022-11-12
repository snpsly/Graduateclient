/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import Index from './src/layout';
import AppRouter from './src/layout/approuter';
import store from './src/store/reduxstore/index';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppRouter></AppRouter>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
