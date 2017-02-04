import {FETCH_FOOD_API} from './actionTypes'
const api_key = '2394e7f0b7ee410119bf940d27e7cd30'
const api_id = '553bf14d'
let ingredients = 'bacon'

export const fetchRecipes = (ingredients) => dispatch => {
  fetch('https://api.edamam.com/search?q=' + ingredients + '&app_id=' + api_id + '&app_key=' + api_key + '&from=0&to=10').then(
      (response) => {
        return response.json()
      }
  ).then(
      (recipesData) => {
        console.log('PARSED FOOD RECIPIES', recipesData)
        dispatch({type: FETCH_FOOD_API, recipes: recipesData})
      }
  ).catch(
      (errorFetching) => {
        console.log('failed to fetch: ', errorFetching)
      }
  )
}


//https://api.edamam.com/search?q=bacon&app_id=553bf14d&app_key=2394e7f0b7ee410119bf940d27e7cd30
//"https://api.edamam.com/search?q=" + ingredients + "&app_id=" + api_id + "&app_key=" + api_key
