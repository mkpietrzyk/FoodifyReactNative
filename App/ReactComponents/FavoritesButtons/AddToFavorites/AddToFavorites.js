import React, {Component} from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  AsyncStorage
} from 'react-native';
import favoritesData from '../../../data/favorites.json'

export default class FetchFavorites extends React.Component {

  constructor() {
    super()
  }

  onPress = () => {
      favoritesData.push(this.props)
      AsyncStorage.setItem("favList", JSON.stringify(favoritesData))
      this.setState({"favList": JSON.stringify(favoritesData)})
      console.log(favoritesData)
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
