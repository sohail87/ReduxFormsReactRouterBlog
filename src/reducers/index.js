import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
//recomended to alias reducer to formReducer

// internally redux form uses our redux instance
// our instance of the redux store
// for handling all the state produced by the form
// the form thats being rendered on the screen

//redux form saving us from having to wire up action creators

import PostsReducer from './reducer_posts'

// the key for formReducer must be form

// all the different forms that we hookup inside our different components
// are going to assume that the formReducer is
// being applied to the form piece of state listed below

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
