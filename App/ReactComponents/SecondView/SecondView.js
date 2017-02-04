import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class SecondView extends React.Component {

  render() {
    return (
        <View>
          <Text>This is PageTwo!</Text>
        </View>
    );
  }
}
