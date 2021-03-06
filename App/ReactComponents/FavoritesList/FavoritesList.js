import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  AsyncStorage
} from 'react-native';
import {RecipeDetailsButton} from '../RecipeDetailsButton'
import favoritesData from '../../data/favorites.json'

// let favoritesData = [];


export default class FavoritesList extends Component {

  constructor() {
    super()
  }

  componentWillMount() {
    this.setState({"favList": []})
  }

  componentDidMount() {
    AsyncStorage.getItem("favList").then((value) => {
      this.setState({"favList": JSON.parse(value)})
      console.log(this.state)
    }).done();
  }


  render(){
    if (this.state.favList.length === 0) {
      return (
          <View>
            <Text>You don't have any favorites.. yet!</Text>
          </View>
      )
    }

    return (
        <View style={styles.favoritesView}>
          <ScrollView automaticallyAdjustContentInsets={false}
                      scrollEventThrottle={200}>
            {this.state.favList.map(
                favorite =>
                    <View style={styles.listItem}>
                      <Image
                          style={styles.itemImage}
                          source={{uri: favorite.recipe.image}}>
                        <View style={styles.itemLabel}>
                          <Text style={styles.itemSource}>{favorite.recipe.source}</Text>
                          <Text style={styles.itemHeader}>{favorite.recipe.label}</Text>
                          <RecipeDetailsButton recipe={favorite.recipe}/>
                        </View>
                      </Image>
                    </View>
            )}
          </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  favoritesView: {
    flex: 1,
    backgroundColor: '#4c1e1e',
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 150,
    marginHorizontal: 15,
    marginBottom: 25,
    backgroundColor: '#FF6666',
  },
  itemSource: {
    color: '#FF6666',
    borderBottomWidth: 1,
    borderColor: '#FF6666',
    margin: 10,
  },
  itemImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  itemLabel: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
  },
  itemHeader: {
    color: '#fff',
    fontSize: 24,
    marginHorizontal: 10,
  },
})
