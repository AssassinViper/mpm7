/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigator from './src/Navigator';

const App = () => {

  console.disableYellowBox = true;
  return (
    <Navigator/>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
