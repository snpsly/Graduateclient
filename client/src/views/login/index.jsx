import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {Input, Icon, ButtonGroup} from '@rneui/themed';
import {login} from '../../api/login';
import store from '../../store/reduxstore';
import {useDispatch} from 'react-redux';
const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function showToast() {
    ToastAndroid.show('用户密码错误', ToastAndroid.SHORT);
  }

  return (
    <View style={styles.body}>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <Text style={styles.title}>欢迎登录保洁预约系统</Text>
      <ButtonGroup
        buttons={['用户', '保洁']}
        selectedIndex={selectedIndex}
        onPress={value => {
          setSelectedIndex(value);
        }}
        containerStyle={{marginBottom: 20}}
      />

      <Input
        placeholder="请输入账户"
        onChangeText={setUsername}
        value={username}
      />
      <Input
        placeholder="请输入密码"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <Button
        title="登录"
        onPress={() => {
          login({username, password, selectedIndex})
            .then(res => {
              if ('用户密码错误' === res.data) {
                showToast();
              } else {
                dispatch({type: 'ADD', data: {...res.data}});

                navigation.navigate('IndexHome');
              }
            })
            .catch(r => {
              console.log(r);
            });

          setUsername('');
          setPassword('');
        }}></Button>
      <Button
        title="注册"
        onPress={() => {
          navigation.push('Register');
          setUsername('');
          setPassword('');
        }}></Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'black',
    marginTop: 60,
    marginLeft: 30,
    marginBottom: 50,
  },
  body: {
    backgroundColor: 'white',
  },
});
