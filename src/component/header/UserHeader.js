import React, { Component } from "react";

import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions/authAction'


class Header extends Component {

    constructor(props) {
        super(props);


        this.state = {

            isLoading: false

        };


    }

    render() {
        const { logoutUser } = this.props

        return (
            <header>
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light py-0">
                        <Link to="/">
                            <a class="navbar-brand" href="/#" >
                                <img src={logo} alt="logo" />
                            </a>
                        </Link>
                        <Link to="/signup">
                            <a class="nav-link d-lg-none"  ><span class="icon-user mr-1"></span></a>
                        </Link>
                        <Link to="/login">
                            <a class="nav-link d-lg-none px-0"  ><span class="icon-login mr-1"></span></a>
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="fa fa-bars"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav navbar-center m-auto">
                                <Link to="/">

                                    <li class="nav-item active ">
                                        <span class="nav-link" >Home</span>
                                    </li>
                                </Link>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Lol Accounts
                      </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/lolaccount">
                                            <a class="dropdown-item"  >LoL Accounts</a>
                                        </Link>
                                        <Link to="/unrankedaccount">
                                            <a class="dropdown-item"  >Unranked Accounts</a>
                                        </Link>
                                        <Link to="/customizedaccount">
                                            <a class="dropdown-item"  >Customized Accounts</a>
                                        </Link>
                                        <Link to="/">
                                            <a class="dropdown-item"  >How to buy LoL account?</a>
                                        </Link>
                                        <Link to="/">
                                            <a class="dropdown-item"  >How to sell LoL account?</a>
                                        </Link>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"   >FAQ</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"  >Contact Us</a>
                                </li>
                            </ul>
                            <ul class="navbar-nav d-none d-md-flex">
                                <Link to="/userdashboard">
                                    <li class="nav-item  ">
                                        <a class="nav-link text-uppercase "  ><span class="icon-user mr-1"></span>Dashboard</a>
                                    </li>
                                </Link>

                                {/* <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        User
                      </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="">
                                            <a class="dropdown-item"  >Setting</a>
                                        </Link>
                                    </div>
                                </li> */}
                                <Link to="/login">

                                    <li class="nav-item" onClick={() => logoutUser()}>
                                        <a class="nav-link text-uppercase"  ><span class="icon-login mr-1" ></span> Logout</a>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}
Header.propTypes = {
};
const mapStatetoProps = ({ auth }) => ({
    user: auth.user
})
const mapDispatchToProps = ({
    logoutUser,

})
export default connect(mapStatetoProps, mapDispatchToProps)(Header);

