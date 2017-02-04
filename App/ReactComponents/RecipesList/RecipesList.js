import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import {RecipeDetailsButton} from '../RecipeDetailsButton'

const mapStateToProps = state => ({
  recipes: state.recipesData.recipes
})


const RecipesList = (props) => {

  if (props.recipes === null) {
    return (
        <View>
          <Text>Loading Recipes Label...</Text>
        </View>
    )
  }

  return (
      <View style={styles.recipesView}>
        <ScrollView automaticallyAdjustContentInsets={false}
                    onScroll={() => {
                      console.log('onScroll!');
                    }}
                    scrollEventThrottle={200}>
          {props.recipes.hits.map(
              hit =>
                  <View key={hit.recipe.calories} style={styles.listItem}>
                    <Image
                        style={styles.itemImage}
                        source={{uri: hit.recipe.image}}>
                      <View style={styles.itemLabel}>
                        <Text style={styles.itemSource}>{hit.recipe.source}</Text>
                        <Text style={styles.itemHeader}>{hit.recipe.label}</Text>
                        <RecipeDetailsButton recipe={hit.recipe}/>
                      </View>
                    </Image>
                  </View>
          )}
        </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  recipesView: {
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


export default connect(mapStateToProps)(RecipesList)