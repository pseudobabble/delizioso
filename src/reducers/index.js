import { handleActions } from 'redux-actions'
import initialState from './initialState'

const reducer = handleActions({
  'RECIPES_GET_SUCCESS'(action, state) {
    const { recipes } = state;
    return {
      ...state,
      recipes: recipes
    }
  },
  'RECIPES_GET_ERROR'(action, state) {
    const { error } = state;
    return {
      ...state,
      error: error
    }
  },
}, initialState);

export default reducer
