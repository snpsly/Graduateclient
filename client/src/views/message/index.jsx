import {
  View,
  Text,
  StatusBar,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useRef} from 'react';
import useWebSocket from 'react-native-use-websocket';
import {useState} from 'react';
import {useEffect} from 'react';
import store from '../../store/reduxstore';
export default function App() {
  const [socketUrl] = React.useState('ws://10.0.2.2:8080/socket');
  const [messageHistory, setmessageHistory] = useState([]);
  const [usermessage, setusermessage] = useState('');
  const {name} = store.getState().userReducer;
  const {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
    getWebSocket,
  } = useWebSocket(socketUrl, {
    onOpen: () => console.log('opened'),
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: closeEvent => true,
  });
  useEffect(() => {
    if (lastMessage.data !== undefined) {
      const msg = JSON.parse(lastMessage.data);
      setmessageHistory([...messageHistory, msg]);
    }
  }, [lastMessage]);
  return (
    <>
      <FlatList
        data={messageHistory}
        renderItem={({item}) =>
          item &&
          item.message && (
            <View style={{margin: 10}}>
              <Text
                style={item.name === 'user' ? styles.righttop : styles.lefttop}>
                {item.name === 'user' ? '我' : '客服'}
              </Text>
              <Text
                style={
                  item.name === 'user' ? styles.rightdilog : styles.leftdilog
                }>
                {item.message}
              </Text>
            </View>
          )
        }
      />
      <View style={styles.messageinput}>
        <TextInput
          style={styles.textinput}
          onChangeText={text => {
            setusermessage(text);
          }}
          value={usermessage}></TextInput>
        <Button
          style={styles.textclick}
          onPress={() => {
            sendJsonMessage({
              name: 'user',
              message: usermessage,
              username: name,
            });
            setusermessage('');
          }}
          title={'发送'}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  messageinput: {
    flexDirection: 'row',
    borderColor: '#000000',
    borderWidth: 1,
  },
  textinput: {
    flex: 2,
  },
  textclick: {
    flex: 8,
    backgroundColor: '#FFCF07',
  },
  rightdilog: {
    textAlign: 'right',
    padding: 10,
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'flex-end',
    backgroundColor: '#FFCF07',
  },
  leftdilog: {
    padding: 10,
    fontSize: 20,
    fontWeight: '500',
    backgroundColor: 'white',
    alignSelf: 'flex-start',
  },
  righttop: {textAlign: 'right'},
  lefttop: {},
});
