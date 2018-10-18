import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';
import * as secrets from '../config';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: secrets.FIREBASE_API_KEY,
      authDomain: secrets.AUTH_DOMAIN ,
      databaseURL: secrets.DATABASE_URL,
      projectId: secrets.PROJECT_ID,
      storageBucket: secrets.STORAGE_BUCKET,
      messagingSenderId: secrets.MESSAGING_SENDER_ID
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;