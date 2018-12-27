import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Landing from './pages/Landing';
import Welcome from './pages/Welcome';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/welcome" component={Welcome} />
        </Switch>
      </Router>
    );
  }
}

export default App;
