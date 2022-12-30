import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CounterView from './CounterComponent/CounterView';
import CounterButtons from './CounterComponent/CounterButtons';
const Counter = () => {
  // const [counter, setCounter] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
      }}>
      <CounterView />
      <CounterButtons />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
