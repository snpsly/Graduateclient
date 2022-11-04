import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {Header as HeaderRNE, HeaderProps, Icon} from '@rneui/themed';

import Ionicons from 'react-native-vector-icons/Ionicons';
const Header = props => {
  return (
    <HeaderRNE
      backgroundColor="#FFCF07"
      leftComponent={
        <View style={styles.titleleft}>
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Ionicons name="arrow-back-sharp" color="white" size={30} />
          </TouchableOpacity>
          <Text style={styles.titleleftfont}>提交订单</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleleft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleleftfont: {
    color: 'white',
    fontSize: 18,
  },
});

export default Header;
