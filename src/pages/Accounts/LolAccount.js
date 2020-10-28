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
import backgroundimg from '../../assets/images/lol-accounts.jpg'
import { Link, withRouter } from 'react-router-dom';
import $ from "jquery";

import WOW from 'wowjs';
import Footer from '../../assets/Components/Pages/Footer/Footer'
import Header from '../../assets/Components/Pages/Header/Header'
import SectionTopRated from "../../assets/Components/Pages/DashboadSection/SectionTopRated"
import SectionAcountFilter from '../../assets/Components/Pages/DashboadSection/SectionAcountFilter';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';




class LolAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,
            price_range: 'price-range',
            unmounting: false,
            page: 'lolAccount',
         

        };
    }



    //     componentWillMount() – Executed just before rendering takes place both on the client as well as server-side.
    // componentDidMount() – Executed on the client side only after the first render.
    // componentWillReceiveProps() – Invoked as soon as the props are received from the parent class and before another render is called.
    // shouldComponentUpdate() – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.
    // componentWillUpdate() – Called just before rendering takes place in the DOM.
    // componentDidUpdate() – Called immediately after rendering takes place.
    // componentWillUnmount() – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.
    componentWillUnmount() {
        this.state = {
            unmounting: true, // can't use setState because it is async
        };
    }

    componentDidUpdate() {
        new WOW.WOW({
            live: false
        }).init();
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
            
                {/* <!-- Banner section --> */}
                <section class="banner-section section-background-image" >
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-12 text-center">
                                <Flip bottom delay={200}>

                                    <h1 class="wow flipInX mt-5 mt-md-3" data-wow-delay="0.6s">LEAGUE OF LEGENDS
                           <br></br>ACCOUNTS
                        </h1>
                                </Flip>
                                <Fade bottom delay={300}>

                                    <p class="wow fadeInUp" data-wow-delay="1s"><strong>LOL Trading is a professional marketplace for buyers & sellers
                           <br className="d-none d-md-block"></br>of League of Legends accounts.</strong>
                                    </p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Main --> */}
                <main>
                    {/* <!-- Cart section --> */}

                    <section class="cart-section">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                    <Flip left>

                                        <a href="javascript:void(0)">
                                            <div class="card wow fadeInLeft" data-wow-delay="0.4s">

                                                <div class="card-body">
                                                    <div class="media">
                                                        <img src={cart} alt="cart" />
                                                        <div class="media-body ml-3 ml-md-4">
                                                            <h3 class="mb-0"> HOW TO PURCHASE <br></br>LEAGUE OF LEGENDS ACCOUNT
                                                             </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </Flip>
                                </div>
                                <div class="col-md-6">
                                    <a href="javascript:void(0)">
                                        <div class="card sell-block wow fadeInRight" data-wow-delay="0.4s">
                                            <div class="card-body">
                                                <div class="media">
                                                    <img src={sell} alt="sell" />
                                                    <div class="media-body ml-3 ml-md-4">
                                                        <h3 class="mb-0"> HOW TO Sell <br></br>  LEAGUE OF LEGENDS ACCOUNT
                                          </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Search Filter --> */}
                    <Fade bottom>

                        <SectionAcountFilter
                            price_range={this.state.price_range}
                            page={this.state.page}

                        >

                        </SectionAcountFilter>
                    </Fade>
                 
                    {/* <!-- Top Rated Accounts --> */}
                    
                    <SectionTopRated

                    ></SectionTopRated>
                </main>
                {/* <!-- Footer --> */}
                <Footer></Footer>
            </div>




        )
    }

}

LolAccount.propTypes = {

};


export default (LolAccount);

