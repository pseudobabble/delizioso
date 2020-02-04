import {put, call, select, takeLatest, takeEvery} from 'redux-saga/effects'
import get from 'axios'

const apiKey = process.env.REACT_APP_RECIPE_API_KEY;

function* stateLogger(action) {
  const state = yield select();
  console.log('action', action);
  console.log('state after', state);

}

function* initGetRecipes() {
  try {
    const recipes = yield call(get, `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=20`);
    yield put({type: 'RECIPES_GET_SUCCESS', recipes: recipes.data.recipes})

    // const recipes = yield call(get, 'http://127.0.0.1:3001/recipes');
    // yield put({type: 'RECIPES_GET_SUCCESS', recipes: recipes.data})
  } catch (error) {
    yield put({type: 'RECIPES_GET_ERROR', error: error})
  }
}

function* watchGetRecipes(action) {
    try {
      const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=20` + action.payload;
      const recipes = yield call(get, url);
      yield put({type: 'RECIPES_GET_SUCCESS', recipes: recipes.data.recipes})

      // const recipes = yield call(get, 'http://127.0.0.1:3001/recipes');
      // yield put({type: 'RECIPES_GET_SUCCESS', recipes: recipes.data})
    } catch (error) {
      yield put({type: 'RECIPES_GET_ERROR', error: error})
    }
}


function* rootSaga() {
  yield takeLatest('RECIPES_INIT', initGetRecipes);
  yield takeLatest('RECIPES_GET', watchGetRecipes);
  yield takeEvery('*', stateLogger);
}

export default rootSaga
