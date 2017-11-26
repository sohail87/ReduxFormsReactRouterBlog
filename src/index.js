import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import { BrowserRouter, Route } from 'react-router-dom'
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsShow from './components/posts_show';
import PostsNew from './components/posts_new';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
    <Route path="/" component={PostsIndex}></Route>
    <Route path="/posts/:id" component={PostsShow}></Route>
    <Route path="/posts/new" component={PostsNew}></Route>
    </div>
  </BrowserRouter>
</Provider>, document.querySelector('.container'));
