# Delizioso

## Randomised Recipe Hunting
A React frontend project for the Spoonacular API
- React
- Redux
- Redux-Saga
- Semantic UI


## Steps to try it out:
- Locally
    - `git clone https://github.com/pseudobabble/delizioso.git`
    - `cd delizioso`
    - Edit `sagas/index.js`: uncomment the lines using `localhost`, comment/delete the lines using `api.spoonacular.com` 
    - `yarn install &&
    json-server --watch offline.json --port 3001 && 
    yarn start`
- Using the Spoonacular API
    - `git clone https://github.com/pseudobabble/delizioso.git`
    - `cd delizioso` 
    - Get a Spoonacular API key
        - Sign up to a free ($0/month) plan at [Spoonacular](https://spoonacular.com/food-api/pricing) (HINT: [Mailinator](https://www.mailinator.com/))
        - create a `.env` file in the project root which defines REACT_APP_RECIPE_API_KEY to be your Spoonacular API key
    - `yarn install && yarn start`

