import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyDOBR28tfwpPL2jP2u22sf6XyJ-EJHzzqU',
      authDomain: 'manager-5781a.firebaseapp.com',
      databaseURL: 'https://manager-5781a.firebaseio.com',
      projectId: 'manager-5781a',
      storageBucket: '',
      messagingSenderId: '239822135847'
    };
    firebase.initializeApp(config);
  }

  render() {
    //createStore(reducer, initial state(used for server side render, reudx thunk)
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
