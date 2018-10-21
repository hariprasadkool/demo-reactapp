import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link,Router, Route, IndexRoute, BrowserRouter, browserHistory } from 'react-router-dom';
import { Home } from './Home';
import { SignUp } from './SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Route path="/" exact={true} strict component={SignUp} />
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
