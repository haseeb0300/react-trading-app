import React from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from '../pages/Dashboard/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
 
      <Switch>
        <Route exact path="/" component={Dashboard} />
    
        
      </Switch>
 
  </Router>
  );
}

export default App;
