import React, {Component} from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  AsyncStorage
} from 'react-native';
import favoritesData from '../../../data/favorites.json'

let favData = []

export default class FetchFavorites extends React.Component {

  constructor() {
    super()
  }


  onPress = () => {
    AsyncStorage.getItem("favList").then((value) => {
      this.setState({"favList": value})
      let oldData = JSON.parse(value)
      AsyncStorage.setItem("favList", JSON.stringify(oldData.concat(this.props)))
      this.setState({"favList": JSON.stringify(oldData.concat(this.props))})
    }).done();
    console.log('i guess that did the trick <3')
  }

  render() {
    return (
        <TouchableHighlight
            style={styles.fetchButton}
            onPress={this.onPress}
            accessibilityLabel="See favs!"
        >
          <Text style={styles.buttonText}>Add To favorites!</Text>
        </TouchableHighlight>
    )
  }


}

const styles = StyleSheet.create({
  fetchButton: {
    backgroundColor: '#FF6666',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 40
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  }
})
