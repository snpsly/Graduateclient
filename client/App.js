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
const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>122</Text>
        <Button title="Solid Button" />
      </View>
    </NavigationContainer>
  );
};

export default App;
