import { createAction } from 'redux-actions'

export const SagaActions = {
  initRecipes: createAction('RECIPES_INIT'),
  getRecipes: createAction('RECIPES_GET')
};
