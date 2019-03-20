import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/style.scss';

import NavBar from '../containers/nav_bar';
import Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
