import React, { Component } from 'react';

import Dashboard from '../Dashboard/Dashboard'
import CustomizedAccount from '../Accounts/CustomizedAccount'
import LolAccount from '../Accounts/LolAccount'
import UnRankedAccount from '../Accounts/UnRankedAccount'
import Login from '../auth/Login'
import Signup from '../auth/Signup'
import PasswordRecovery from '../auth/PasswordRecovery'
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import axios from 'axios';
import Header from '../../assets/Components/Pages/Header/Header';
if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://ec2-18-217-133-232.us-east-2.compute.amazonaws.com:5000/v1';
} else {
    axios.defaults.baseURL = 'http://localhost:4000/v1';
}
axios.defaults.headers.post['Content-Type'] = 'application/json';


class AppNavigation extends Component {
    render() {
        return (


            <Router >
                <Header>
                </Header>
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

            </Router >


        );
    }
}
export default AppNavigation;