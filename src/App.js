import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';

import Hub from './components/pages/Hub'
import WestonStartPage from './components/weston/WestonStartPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Hub} />
        <Route exact path="/weston" component={WestonStartPage} />
      </Switch>
    </Router>
  );
}

export default App;
