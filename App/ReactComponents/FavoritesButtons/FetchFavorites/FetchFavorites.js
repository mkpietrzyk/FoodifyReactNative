import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  TouchableHighlight,
  StyleSheet,
  Text
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {fetchFavorites} from '../../../state/favorites/actionCreators'

const mapStateToProps = state => ({
  favorites: state.favoritesList.favorites,
})

const mapDispatchToProps = dispatch => ({
  fetchFavorites: () => dispatch(fetchFavorites())
})


class FetchFavorites extends React.Component {

  constructor(props) {
    super(props)


  }

  onPress = () => {
    Actions.favoritesList()
    // this.props.fetchFavorites()
    // console.log(props.favorites)
    // Actions.recipesList();
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

export default connect(mapStateToProps, mapDispatchToProps)(FetchFavorites)