import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux' ;
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyA6qdD7LJY_hslmqLNGGGd83vK-2CEINj4',
    authDomain: 'manager-284cb.firebaseapp.com',
    databaseURL: 'https://manager-284cb.firebaseio.com',
    storageBucket: 'manager-284cb.appspot.com',
    messagingSenderId: '32936794989'
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }
}

export default App;
