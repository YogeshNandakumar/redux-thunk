import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import UserList from './components/UserList'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <UserList />  
        </div>
      </Provider>
    );
  }
}

export default App;
