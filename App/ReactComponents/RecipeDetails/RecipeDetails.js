import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class RecipeDetails extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
        <View style={styles.detailsView}>
          <ScrollView automaticallyAdjustContentInsets={false}
                      scrollEventThrottle={200}>
            <View style={styles.labelView}>
              <Image style={styles.labelImage}
                     source={{uri: this.props.recipeDetails.image}}>
                <View style={styles.labelHeaderView}>
                  <Text style={styles.labelSource}>{this.props.recipeDetails.source}</Text>
                  <Text style={styles.labelHeader}>{this.props.recipeDetails.label}</Text>
                </View>
              </Image>
            </View>

            <View style={styles.nutritionView}>
              <Text style={styles.titleLabel}>Nutrition Facts</Text>
            </View>

            <View style={styles.ingredientsView}>
              <Text style={styles.titleLabel}>Ingredients</Text>
              {this.props.recipeDetails.ingredientLines.map(ingredient => <Text key={ingredient} style={styles.ingredientItem}>* {ingredient}</Text>)}
            </View>

            <View style={styles.howToView}>
              <Text style={styles.titleLabel}>How To</Text>

            </View>


          </ScrollView>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  detailsView: {
    flex: 1,
    backgroundColor: "#5b2424",
  },
  labelView: {
    flex: 1,
    height: 300,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FF6666',
  },
  labelImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  labelHeaderView: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
  },
  labelHeader: {
    color: '#fff',
    fontSize: 36,
    marginHorizontal: 10,
  },
  labelSource: {
    color: '#FF6666',
    fontSize: 24,
    borderBottomWidth: 1,
    borderColor: '#FF6666',
    margin: 10,
  },
  titleLabel: {
    color: '#FF6666',
    textAlign: 'center',
    fontSize: 24,
    paddingVertical: 3,
    marginVertical: 24,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#FF6666',
  },
  nutritionView:{
    flex: 1,
    backgroundColor: '#3d1818',
    paddingBottom: 30,
  },
  ingredientsView: {
    flex:1,
    backgroundColor: '#4c1e1e',
    paddingBottom: 30,
  },
  ingredientItem: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 5,
    marginHorizontal: 15,
  },
  howToView: {
    flex: 1,
    backgroundColor: "#5b2424",
    paddingBottom: 30,
  },
})