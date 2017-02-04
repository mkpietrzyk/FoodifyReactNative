import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import {FoodifyReactNative} from '../../index.android'
import {SecondView} from '../SecondView/SecondView'


export default class ReactNativeNavigationExample extends Component {
  renderScene(route, navigator) {
    if (route.id === 1) {
      return <FoodifyReactNative navigator={navigator} />
    } else if (route.id === 2) {
      return <SecondView navigator={navigator} />
    }
  }

  configureScene(route) {
    return CustomSceneConfig;
  }

  render() {
    return (
        <Navigator
            initialRoute={{id: 1, }}
            renderScene={this.renderScene}
            configureScene={this.configureScene} />
    );
  }
}

AppRegistry.registerComponent('ReactNativeNavigationExample', () => ReactNativeNavigationExample);
