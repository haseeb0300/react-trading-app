import React, { Component } from 'react';



import './App.css';
import Dashboard from '../pages/Dashboard/Dashboard'
import CustomizedAccount from '../pages/Accounts/CustomizedAccount'
import LolAccount from '../pages/Accounts/LolAccount'
import UnRankedAccount from '../pages/Accounts/UnRankedAccount'
import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'
import PasswordRecovery from '../pages/auth/PasswordRecovery'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class App extends Component {
    render() {
        return ( <Router >
            <Switch >
            <Route exact path = "/"
            component = { Dashboard }/> 
            <Route exact path = "/customizedaccount"
            component = { CustomizedAccount }/>
             <Route exact path = "/lolaccount"
            component = { LolAccount }/>
             <Route exact path = "/unrankedaccount"
            component = { UnRankedAccount }/>
             <Route exact path = "/login"
            component = { Login }/> 
            <Route exact path = "/signup"
            component = { Signup }/> 
            <Route exact path = "/passwordrecovery"
            component = { PasswordRecovery }/>
            </Switch>
              </Router>
        );
    }
}
export default App;