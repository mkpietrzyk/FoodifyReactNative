import {FETCH_FAVORITES, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from './actionTypes'

import favoritesData from '../../data/favorites.json'


// export const fetchFavorites = () => dispatch => {
//     fetch('../data/favorites.json').then(
//         (response) => {
//           return response.json()
//         }
//     ).then(
//         (favoritesData) => {
//           console.log('PARSED FAVORITES', favoritesData)
//           dispatch({type: FETCH_FAVORITES, favorites: favoritesData})
//         }
//     ).catch(
//         (errorFetching) => {
//           console.log('failed to fetch: ', errorFetching)
//         }
//     )
// }
 export const fetchFavorites = () => dispatch => {
          dispatch({type: FETCH_FAVORITES, favorites: favoritesData})
}

export const addToFavorites = () => dispatch => {

}