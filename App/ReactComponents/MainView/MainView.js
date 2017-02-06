'use strict'

import React, {Component} from 'react';
import {
  StyleSheet,
  AsyncStorage,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

import {FetchRecipesButton} from '../FetchRecipesButton'
import {FetchFavorites} from '../FavoritesButtons/FetchFavorites'

export default class MainView extends Component {
  constructor() {
    super()

  }

  componentWillMount() {
    this.setState({ingredients: ''})
  }


  updateIngredients = (text) => {
    this.setState({ingredients: text})
    console.log(text)
  }


  render() {
    return (
        <View style={styles.mainView}>
          <View style={styles.logoView}>
            <Text style={styles.logoText}> Welcome to Foodify React Native App </Text>
          </View>
          <View style={styles.labelView}>
            <TextInput
                style={styles.labelInput}
                placeholder="What do you have?"
                onChangeText={this.updateIngredients}
            />

            <FetchRecipesButton ingredients={this.state.ingredients}/>
          </View>
          <View style={styles.buttonView}>
            <FetchFavorites/>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#993d3d",
  },
  logoView: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6666',
  },
  logoText: {
    fontSize: 20
  },
  buttonView: {
    flex: 1,
  },
  labelView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  labelInput: {
    backgroundColor: '#fff',
    textAlign: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 50,
    height: 40,
  }
});