'use strict'

import React, {Component} from 'react';
import {
  AppRegistry,
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import {Provider} from 'react-redux'
import store from "./store";

import {MainView} from './App/ReactComponents/MainView'
import {SecondView} from './App/ReactComponents/SecondView'
import {RecipesList} from './App/ReactComponents/RecipesList'
import {RecipeDetails} from './App/ReactComponents/RecipeDetails'
import {FavoritesList} from './App/ReactComponents/FavoritesList'

export default class FoodifyReactNative extends Component {
  constructor() {
    super()
  }

  render() {
    return (
        <Provider store={store}>
          <Router>
            <Scene key="root">
              <Scene key="mainView" component={MainView} title="Welcome to foodify!" initial={true} hideNavBar={true}/>
              <Scene key="secondView" component={SecondView} title="SecondView"/>
              <scene key="recipesList" component={RecipesList} title="Recipes List"/>
              <scene key="recipeDetails" component={RecipeDetails} title="Recipe Details"/>
              <scene key="favoritesList" component={FavoritesList} title="Your Favorites Recipes"/>
            </Scene>
          </Router>
        </Provider>
    );
  }
}


AppRegistry.registerComponent('FoodifyReactNative', () => FoodifyReactNative);

