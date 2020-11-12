import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from '../Dashboard/Dashboard'
import CustomizedAccount from '../Accounts/CustomizedAccount'
import LolAccount from '../Accounts/LolAccount'
import UnRankedAccount from '../Accounts/UnRankedAccount'
import Login from '../auth/Login'
import Signup from '../auth/Signup'
import PasswordRecovery from '../auth/PasswordRecovery'
import SellAccount from '../Accounts/SellAccount'


import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import axios from 'axios';
 
import UserHeader from '../../component/header/UserHeader';
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';


import store from '../../store/store'

import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
 

import { logoutUser, setCurrentUser } from '../../store/actions/authAction';
import UserDashboard from '../UserDashboard/UserDashboard';
if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://160.153.253.183:4000/v1';
} else {
    axios.defaults.baseURL = 'http://localhost:4000/v1';
}
axios.defaults.headers.post['Content-Type'] = 'application/json';
if (localStorage.jwtToken) {

    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);



    const decoded = jwt_decode(localStorage.jwtToken);
    var user = localStorage.getItem('user');
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(JSON.parse(user)));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());


    }
}

class AppNavigation extends Component {
    render() {
        const { user } = this.props
        console.log(user)
        return (


            <Router >
                
                { user.user_name && <UserHeader />}
                {      !user.user_name &&
                    <Header>
                    </Header>
                }
                <Switch >
                    <Route exact path="/"
                        component={Dashboard} />
                    <Route exact path="/customizedaccount"
                         ><LolAccount
                         page={'customizeAccount'}
                         ></LolAccount></Route>
                    <Route exact path="/lolaccount"
                         ><LolAccount
                         page={'lolAccount'}
                         ></LolAccount></Route>
                    <Route exact path="/unrankedaccount"
                         ><LolAccount
                         page={'unrankedAccount'}
                         ></LolAccount></Route>
                    <Route exact path="/login"
                        component={Login} />
                    <Route exact path="/signup"
                        component={Signup} />
                    <Route exact path="/passwordrecovery"
                        component={PasswordRecovery} />
                    <Route exact path="/userdashboard" component={UserDashboard} />
                    <Route exact path="/sellaccount" component={SellAccount} />

                </Switch>
            
                <Footer></Footer>
            </Router >


        );
    }
}
const mapStateToProp = state => ({
    user: state.auth.user

});

const mapDispatchToProps = ({

});

export default connect(mapStateToProp, mapDispatchToProps)(AppNavigation);