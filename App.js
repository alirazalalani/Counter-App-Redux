import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Counter from './src/component/Counter';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
