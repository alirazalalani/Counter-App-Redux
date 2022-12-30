import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const CounterView = () => {
  const data = useSelector(state => state.counter);
  console.log(data);
  return (
    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>{data.count}</Text>
    </View>
  );
};

export default CounterView;

const styles = StyleSheet.create({});
