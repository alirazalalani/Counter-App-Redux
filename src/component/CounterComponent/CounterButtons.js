import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';

const CounterButtons = () => {
  const dispatch = useDispatch();
  const incrementCounter = () => {
    dispatch({type: 'increment'});
  };
  const decrementCounter = () => {
    dispatch({type: 'decrement'});
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 15,
      }}>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => incrementCounter()}>
        <Text style={styles.textStyle}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => decrementCounter()}>
        <Text style={styles.textStyle}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CounterButtons;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 25,
    color: 'white',
  },
});
