import {FETCH_FAVORITES, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from './actionTypes'

const initialState = {
  favorites: null
}

export default (state = initialState, action = {}) => {
  switch (action.type){
    case FETCH_FAVORITES:
      return {
          ...state,
        favorites: action.favorites
      }
    case ADD_TO_FAVORITES:
      return {
          ...state,
        favorites: state.favorites.concat(action.favorites)
      }
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
    //    to do
    }
    default:
      return state
  }

}