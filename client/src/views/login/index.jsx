import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {Input, Icon} from '@rneui/themed';
import {login} from '../../api/login';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function showToast() {
    ToastAndroid.show('用户密码错误', ToastAndroid.SHORT);
  }
  return (
    <View style={styles.body}>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <Text style={styles.title}>欢迎登录保洁预约系统</Text>
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
          login({username, password})
            .then(res => {
              console.log(res);
              if ('用户密码错误' === res.data) {
                showToast();
              } else {
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
