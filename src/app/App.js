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
import axios from 'axios';

import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { logoutUser, setCurrentUser } from '../store/actions/authAction';
import { Provider } from 'react-redux';
import store from '../store/store';

if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://ec2-18-217-133-232.us-east-2.compute.amazonaws.com:5000/v1';
} else {
    axios.defaults.baseURL = 'http://localhost:4000/v1';
}

axios.defaults.headers.post['Content-Type'] = 'application/json';

var localStorage = ""
// Check for token
if (localStorage && localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    var user = localStorage.getItem('user');
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(JSON.parse(user)));
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        // window.location.href = '/login';
    }
}
class App extends Component {
    render() {
        return (
          <Provider store={store}>
                <Router >
                    <Switch >
                        <Route exact path="/"
                            component={Dashboard} />
                        <Route exact path="/customizedaccount"
                            component={CustomizedAccount} />
                        <Route exact path="/lolaccount"
                            component={LolAccount} />
                        <Route exact path="/unrankedaccount"
                            component={UnRankedAccount} />
                        <Route exact path="/login"
                            component={Login} />
                        <Route exact path="/signup"
                            component={Signup} />
                        <Route exact path="/passwordrecovery"
                            component={PasswordRecovery} />
                    </Switch>
                </Router>
                </Provider>
        );
    }
}
export default App;