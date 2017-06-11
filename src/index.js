import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() {
    return <div>Hello!</div>
  }
}
class Goodbye extends React.Component {
  render() {
    return <div>Goodbye!</div>
  }
}
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      Header goes here....
    <Route path="/hello" component={Hello}></Route>
    <Route path="/goodbye" component={Goodbye}></Route>
    </div>
  </BrowserRouter>
</Provider>, document.querySelector('.container'));
