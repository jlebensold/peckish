import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedRecipes = createReducer({}, {
  [types.SET_SEARCHED_RECIPES](state, action) {
    let newState = {}
    action.recipes.forEach( (recipe) => {
      newState[recipe.id] = recipe
    });
    return newState;
  },

});

