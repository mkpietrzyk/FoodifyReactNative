import {FETCH_FOOD_API} from './actionTypes'

const initialState = {
  recipes: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_FOOD_API:
      return {
        ...state,
        recipes: action.recipes
      }
    default:
      return state

  }
}