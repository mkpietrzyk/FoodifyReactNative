import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  AsyncStorage
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import favoritesData from '../../../data/favorites.json'

export default class FetchFavorites extends React.Component {


  constructor(props) {
    super(props)

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
