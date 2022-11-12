import {View, Text, StatusBar, FlatList, Button} from 'react-native';
import React from 'react';
import useWebSocket from 'react-native-use-websocket';
export default function App() {
  const [socketUrl] = React.useState('wss://10.0.2.2:8080/socket');

  const messageHistory = React.useRef([]);

  const {sendMessage, lastMessage, readyState} = useWebSocket(socketUrl);

  messageHistory.current = React.useMemo(
    () => messageHistory.current.concat(lastMessage),
    [lastMessage],
  );
  console.log(lastMessage);
  const sendM = () => sendMessage('Hello');

  const handleClickSendMessage = React.useCallback(sendM, [sendM]);

  return (
    <>
      <Button
        onPress={handleClickSendMessage}
        title={"Click Me to send 'Hello'"}
      />

      {lastMessage ? <Text>Last message: {lastMessage.data}</Text> : null}
      <FlatList
        keyExtractor={(item, i) => {
          return i.toString();
        }}
        data={messageHistory.current}
        renderItem={({item}) =>
          item && item.message && <Text>{item.message.data}</Text>
        }
      />
    </>
  );
}
