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


export default class RecipeDetailsButton extends React.Component {

  constructor(props) {
    super(props);

  }

  onPress = () => {
    console.log('click!');
    console.log(this.props.recipe);
    Actions.recipeDetails({recipeDetails: this.props.recipe});
  }

  render() {
    return (
        <TouchableHighlight
            style={styles.detailButton}
            onPress={this.onPress}
            accessibilityLabel="Detailed Recipe"
        >
          <Text style={styles.buttonText}>Details</Text>
        </TouchableHighlight>
    )
  }

}

const styles = StyleSheet.create({
  detailButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FF6666',
    justifyContent: 'center',
    width: 60,
    height: 30
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  }
})

// export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetailsButton)