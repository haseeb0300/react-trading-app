import React, { useState } from "react";
 
import logo from "../../assets/images/logo.png"
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function Header(props) {
   
    return (
        <header>
        <div class="container">
           <nav class="navbar navbar-expand-lg navbar-light py-0">
           <Link to="/">
              <a class="navbar-brand"  >
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

                    <li class="nav-item active">
                       <a class="nav-link"  >Home</a>
                    </li>
                    </Link>
                    <li class="nav-item dropdown " >
                       <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <li class="nav-item ">
                       <a class="nav-link" >FAQ</a>
                    </li>
                    <li class="nav-item">
                       <a class="nav-link"  >Contact Us</a>
                    </li>
                 </ul>
                 <ul class="navbar-nav d-none d-md-flex">
                 <Link to="/signup">
                    <li class="nav-item">
                       <a class="nav-link text-uppercase"  ><span class="icon-user mr-1"></span> Sign Up</a>
                    </li>
                    </Link>
                    <Link to="/login">

                    <li class="nav-item">
                       <a class="nav-link text-uppercase"  ><span class="icon-login mr-1"></span> Login</a>
                    </li>
                    </Link>
                 </ul>
              </div>
           </nav>
        </div>
     </header>
        );
}
Header.propTypes = {
};
const mapStatetoProps = ({ auth }) => ({
   user: auth.user
})
const mapDispatchToProps = ({
})
export default connect(mapStatetoProps, mapDispatchToProps) (Header);

