import {StyleSheet, Text, View, StatusBar, Button} from 'react-native';
import React from 'react';
import {Input, Icon} from '@rneui/themed';
import {useState} from 'react';
import {register} from '../../api/login';
const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const input = React.createRef();
  return (
    <View style={styles.body}>
      <StatusBar barStyle="light-content" backgroundColor="#FFFFFF" />
      <Text style={styles.title}>注册</Text>
      <Input
        ref={input}
        placeholder="请输入账户"
        onChangeText={setUsername}
        value={username}
      />
      <Input
        placeholder="请输入密码"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Input placeholder="请输入昵称" onChangeText={setName} />
      <Button
        title="注册"
        onPress={() => {
          register({
            username,
            password,
            name,
          }).then(res => {
            console.log(res);
          });
          navigation.navigate('Login');
        }}></Button>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
