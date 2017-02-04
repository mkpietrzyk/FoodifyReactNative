import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  TouchableHighlight,
  StyleSheet,
  Text
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {fetchRecipes} from '../../state/foodApi/actionCreators'

const mapStateToProps = state => ({
  recipes: state.recipesData.recipes,
})

const mapDispatchToProps = dispatch => ({
  fetchRecipesList: (ingredients) => dispatch(fetchRecipes(ingredients))
})


class FetchRecipesButton extends React.Component {

  constructor(props) {
    super(props)


  }

  onPress = () => {
    console.log(this.props.ingredients);
    this.props.fetchRecipesList(this.props.ingredients);
    Actions.recipesList();
  }

  render() {
    return (
        <TouchableHighlight
            style={styles.fetchButton}
            onPress={this.onPress}
            accessibilityLabel="Get Recipies!"
        >
          <Text style={styles.buttonText}>Get Recipes!</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(FetchRecipesButton)