import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux' ;
import reducers from './reducers';
import firebase from 'firebase';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello World!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
