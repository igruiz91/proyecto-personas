import React, { Component } from 'react';
import { Route, Router } from 'react-router'
import './App.css';

import Home from './views/Home';

class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <div className="App">
          <Route exact path="/" component={Home} />
        </div>
      </Router>

    );
  }
}


export default App;
