import React, { Component } from 'react';

import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/cart.svg'
import sell from '../../assets/images/sell.svg'
import account1 from '../../assets/images/account/1.png'
import account2 from '../../assets/images/account/2.png'
import account3 from '../../assets/images/account/3.png'
import account4 from '../../assets/images/account/4.png'
import account5 from '../../assets/images/account/5.png'
import account6 from '../../assets/images/account/6.png'
import account7 from '../../assets/images/account/7.png'
import account8 from '../../assets/images/account/8.png'
import account9 from '../../assets/images/account/9.png'
import account10 from '../../assets/images/account/10.png'
import account11 from '../../assets/images/account/11.png'
import account12 from '../../assets/images/account/12.png'



import master_img from '../../assets/images/master.png'
import visa_img from '../../assets/images/visa.png'
import paypal_img from '../../assets/images/paypal.png'

import skrill_img from '../../assets/images/skrill.png'
import stripe_img from '../../assets/images/stripe.png'


import backgroundimg from '../../assets/images/lol-accounts.jpg'
import { Link, withRouter } from 'react-router-dom';
import WOW from 'wowjs';
import Footer from '../../assets/Components/Pages/Footer/Footer'
import Header from '../../assets/Components/Pages/Header/Header';





class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,
        };
    }




    componentDidMount() {

        // this.props.i18n.changeLanguage("de");
        new WOW.WOW({
            live: false
        }).init();



    }


    render() {

        // const { t, i18n } = this.props
        const { t, i18n } = this.props

        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }

        return (
            <div class="wrapper">
              <Header></Header>
                {/* <!-- Banner section --> */}
                <section class="banner-section section-background-login-image" >

                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-12 text-center">
                                <h1 class="wow flipInX mt-3" data-wow-delay="0.6s">LOGIN</h1>
                                <p class="wow fadeInUp" data-wow-delay="1s">Create new account on our platform. It will allow you to use all prepared features by LoL Trading.
                           <br></br><strong>If you lost access to your account go to forgot password section & recover your account.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Main --> */}
                <main>
                    {/* <!-- Our Services --> */}
                    <section class="user-section wow fadeInUp" data-wow-delay="1s">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-12">
                                    <div class="user-account">
                                        <h2 class="text-center wow pulse" data-wow-delay="0.2s">Account Login</h2>
                                        <form>
                                            <div class="form-group mb-4">
                                                <label>Enter your Email Address</label>
                                                <input type="email" class="form-control" placeholder="Joel@example.com" />
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" class="form-control" placeholder="Joel@example.com" />
                                            </div>
                                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                                            <div class="row align-items-center mt-3">
                                                <div class="col-md-7">
                                                    <button type="button" class="btn btn-primary btn-block btn-fb"><i class="fa fa-facebook-square"></i> <span>Login with Facebook</span></button>
                                                </div>
                                                <div class="col-md-5 text-center text-md-right mt-3 mt-md-0">
                                                  <Link to="/passwordrecovery">  
                                                    <a class="forgot-pw" href="">Forgot Your Password? <i class="fa fa-arrow-right ml-2"></i></a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div class="row mt-md-4 pt-3">
                                                <div class="col-md-4 text-center text-md-left">
                                                    <div class="form-group custom-check">
                                                        <input type="checkbox" id="Remember" />
                                                        <label for="Remember">Remember me</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-8 text-center">
                                                    <p>Don't have an account yet?<Link to="/signup"><a href="">Click here</a> </Link>to create one enjoy our Loyalty Program!</p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-7 px-md-4">
                                    <h4 class="text-center wow fadeInDown" data-wow-delay="0.6s">PAYMENT PROVIDERS:</h4>
                                    <ul>
                                        <li class="wow fadeInRight" data-wow-delay="0.6s">
                                            <img src={paypal_img} alt="paypal" />
                                        </li>
                                        <li class="wow fadeInRight" data-wow-delay="0.8s">
                                            <img src={master_img} alt="master" />
                                        </li>
                                        <li class="wow fadeInRight" data-wow-delay="1s">
                                            <img src={visa_img} alt="visa" />
                                        </li>
                                        <li class="wow fadeInRight" data-wow-delay="1.3s">
                                            <img src={skrill_img} alt="skrill" />
                                        </li>
                                        <li class="wow fadeInRight" data-wow-delay="1.6s">
                                            <img src={stripe_img} alt="stripe" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                {/* <!-- Footer --> */}
              <Footer></Footer>
            </div>




        )
    }

}

Login.propTypes = {

};


export default (Login);

