import React, {Component} from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  AsyncStorage
} from 'react-native';
import {Actions} from 'react-native-router-flux';



export default class FetchFavorites extends React.Component {

  constructor() {
    super()
  }

  onPress = () => {
    Actions.favoritesList()
  }

  render() {
    return (
        <TouchableHighlight
            style={styles.fetchButton}
            onPress={this.onPress}
            accessibilityLabel="See favs!"
        >
          <Text style={styles.buttonText}>See my favs!</Text>
        </TouchableHighlight>
    )
  }


}

const styles = StyleSheet.create({
  fetchButton: {
    backgroundColor: '#FF6666',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 60,
    height: 40
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  }
})