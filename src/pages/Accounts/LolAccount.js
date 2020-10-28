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
                {/* <!-- Header --> */}

                <Header></Header>
                {/* <!-- Banner section --> */}
                <section class="banner-section section-background-image"
                // style={{backgroundImage: URL({backgroundi})}}
                // style="background-image: url('assets/images/lol-accounts.jpg');"
                >
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
                        >

                        </SectionAcountFilter>
                        </Fade>
                        {/*                     
                    <section class="search-filter wow fadeInUp" data-wow-delay="0.6s">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <ul class="nav nav-pills nav-fill">
                                        <li class="nav-item">
                                            <Link to="/lolaccount">

                                                <a class="nav-link active" href="">LOL ACCOUNTS</a>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/unrankedaccount">

                                                <a class="nav-link" href="">UNRANKED ACCOUNTS</a>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/customizedaccount">
                                                <a class="nav-link" href="">CUSTOMIZED ACCOUNTS</a>
                                            </Link>
                                        </li>
                                    </ul>
                                    
                                    <div class="card">
                                        <div class="card-body">
                                            <form>
                                                <div class="form-row">
                                                    <div class="form-group col-sm-6 col-lg-2">
                                                        <label>SERVER</label>
                                                        <select class="form-control">
                                                            <option>All</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-6 col-lg-2">
                                                        <label>TIERS</label>
                                                        <select class="form-control">
                                                            <option>All</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-6 col-lg-2">
                                                        <label>SPECIAL INFORMATIONS</label>
                                                        <select class="form-control">
                                                            <option>None</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-6 col-lg-2">
                                                        <label>EXPERT PICK</label>
                                                        <select class="form-control">
                                                            <option>All</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-6 col-lg-2">
                                                        <label>HANDMADE / BOTTED</label>
                                                        <select class="form-control">
                                                            <option>None</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-6 col-lg-2">
                                                        <label>DISCOUNTED</label>
                                                        <select class="form-control">
                                                            <option>All</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-6 col-lg-2">
                                                        <label>LOL ACCOUNTS</label>
                                                        <select class="form-control">
                                                            <option>All</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-sm-6 col-lg-2">
                                                        <label>TYPE OF QUEUE</label>
                                                        <select class="form-control">
                                                            <option>None</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="slider-box">
                                                            <label for="priceRange">Price Range:</label>
                                                            <div id="price-range" class="slider"></div>
                                                            <input type="text" id="priceRange" readonly />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                     */}
                        {/* <!-- Top Rated Accounts --> */}
                        {/* <section class="account-section market-place" id="account">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-6 col-lg-4 col-xl-3">
                                    <div class="card wow fadeInUp" data-wow-delay="0.4s">
                                        <a href="javascript:void(0)">
                                            <img class="card-img-top" src={account9} alt="account" />
                                            <ul class="rating-detail d-flex">
                                                <li>
                                                    <span class="icon-trophy"></span>
                                                    <p>87 champs</p>
                                                </li>
                                                <li>
                                                    <span class="icon-dollar"></span>
                                                    <p>18 skins</p>
                                                </li>
                                                <li>
                                                    <span class="icon-star"></span>
                                                    <p>Level 72</p>
                                                </li>
                                            </ul>
                                            <div class="card-body">
                                                <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                                <ul class="rank-block d-flex">
                                                    <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                                    <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                                </ul>
                                                <h6 class="price">240.00 EUR</h6>
                                            </div>
                                        </a>
                                        <div class="overlayer">
                                            <div class="inner-cnt">
                                                <div class="wrap-link">
                                                    <a class="btn btn-secondary" href="javascript:void(0)">Details</a>
                                                </div>
                                                <div class="wrap-date">
                                                    <div class="label">Creation Date:</div>
                                                    <div class="date">Apr 18, 2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-xl-3">
                                    <div class="card wow fadeInUp" data-wow-delay="0.4s">
                                        <a href="javascript:void(0)">
                                            <img class="card-img-top" src={account10} alt="account" />
                                            <ul class="rating-detail d-flex">
                                                <li>
                                                    <span class="icon-trophy"></span>
                                                    <p>87 champs</p>
                                                </li>
                                                <li>
                                                    <span class="icon-dollar"></span>
                                                    <p>18 skins</p>
                                                </li>
                                                <li>
                                                    <span class="icon-star"></span>
                                                    <p>Level 72</p>
                                                </li>
                                            </ul>
                                            <div class="card-body">
                                                <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                                <ul class="rank-block d-flex">
                                                    <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                                    <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                                </ul>
                                                <h6 class="price">310.00 EUR</h6>
                                            </div>
                                        </a>
                                        <div class="overlayer">
                                            <div class="inner-cnt">
                                                <div class="wrap-link">
                                                    <a class="btn btn-secondary" href="javascript:void(0)">Details</a>
                                                </div>
                                                <div class="wrap-date">
                                                    <div class="label">Creation Date:</div>
                                                    <div class="date">May 4, 2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-xl-3">
                                    <div class="card wow fadeInUp" data-wow-delay="0.4s">
                                        <a href="javascript:void(0)">
                                            <img class="card-img-top" src={account11} alt="account" />
                                            <ul class="rating-detail d-flex">
                                                <li>
                                                    <span class="icon-trophy"></span>
                                                    <p>87 champs</p>
                                                </li>
                                                <li>
                                                    <span class="icon-dollar"></span>
                                                    <p>18 skins</p>
                                                </li>
                                                <li>
                                                    <span class="icon-star"></span>
                                                    <p>Level 72</p>
                                                </li>
                                            </ul>
                                            <div class="card-body">
                                                <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                                <ul class="rank-block d-flex">
                                                    <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                                    <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                                </ul>
                                                <h6 class="price">160.00 EUR</h6>
                                            </div>
                                        </a>
                                        <div class="overlayer">
                                            <div class="inner-cnt">
                                                <div class="wrap-link">
                                                    <a class="btn btn-secondary" href="javascript:void(0)">Details</a>
                                                </div>
                                                <div class="wrap-date">
                                                    <div class="label">Creation Date:</div>
                                                    <div class="date">Jun 28, 2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-xl-3">
                                    <div class="card wow fadeInUp" data-wow-delay="0.4s">
                                        <a href="javascript:void(0)">
                                            <img class="card-img-top" src={account12} alt="account" />
                                            <ul class="rating-detail d-flex">
                                                <li>
                                                    <span class="icon-trophy"></span>
                                                    <p>87 champs</p>
                                                </li>
                                                <li>
                                                    <span class="icon-dollar"></span>
                                                    <p>18 skins</p>
                                                </li>
                                                <li>
                                                    <span class="icon-star"></span>
                                                    <p>Level 72</p>
                                                </li>
                                            </ul>
                                            <div class="card-body">
                                                <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                                <ul class="rank-block d-flex">
                                                    <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                                    <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                                </ul>
                                                <h6 class="price">287.00 EUR</h6>
                                            </div>
                                        </a>
                                        <div class="overlayer">
                                            <div class="inner-cnt">
                                                <div class="wrap-link">
                                                    <a class="btn btn-secondary" href="javascript:void(0)">Details</a>
                                                </div>
                                                <div class="wrap-date">
                                                    <div class="label">Creation Date:</div>
                                                    <div class="date">Jan 22, 2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-xl-3">
                                    <div class="card wow fadeInUp" data-wow-delay="0.4s">
                                        <a href="javascript:void(0)">
                                            <img class="card-img-top" src={account1} alt="account" />
                                            <ul class="rating-detail d-flex">
                                                <li>
                                                    <span class="icon-trophy"></span>
                                                    <p>87 champs</p>
                                                </li>
                                                <li>
                                                    <span class="icon-dollar"></span>
                                                    <p>18 skins</p>
                                                </li>
                                                <li>
                                                    <span class="icon-star"></span>
                                                    <p>Level 72</p>
                                                </li>
                                            </ul>
                                            <div class="card-body">
                                                <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                                <ul class="rank-block d-flex">
                                                    <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                                    <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                                </ul>
                                                <h6 class="price">240.00 EUR</h6>
                                            </div>
                                        </a>
                                        <div class="overlayer">
                                            <div class="inner-cnt">
                                                <div class="wrap-link">
                                                    <a class="btn btn-secondary" href="javascript:void(0)">Details</a>
                                                </div>
                                                <div class="wrap-date">
                                                    <div class="label">Creation Date:</div>
                                                    <div class="date">Mar 15, 2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-xl-3">
                                    <div class="card wow fadeInUp" data-wow-delay="0.4s">
                                        <a href="javascript:void(0)">
                                            <img class="card-img-top" src={account2} alt="account" />
                                            <ul class="rating-detail d-flex">
                                                <li>
                                                    <span class="icon-trophy"></span>
                                                    <p>87 champs</p>
                                                </li>
                                                <li>
                                                    <span class="icon-dollar"></span>
                                                    <p>18 skins</p>
                                                </li>
                                                <li>
                                                    <span class="icon-star"></span>
                                                    <p>Level 72</p>
                                                </li>
                                            </ul>
                                            <div class="card-body">
                                                <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                                <ul class="rank-block d-flex">
                                                    <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                                    <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                                </ul>
                                                <h6 class="price">310.00 EUR</h6>
                                            </div>
                                        </a>
                                        <div class="overlayer">
                                            <div class="inner-cnt">
                                                <div class="wrap-link">
                                                    <a class="btn btn-secondary" href="javascript:void(0)">Details</a>
                                                </div>
                                                <div class="wrap-date">
                                                    <div class="label">Creation Date:</div>
                                                    <div class="date">Aug 23, 2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-xl-3">
                                    <div class="card wow fadeInUp" data-wow-delay="0.6s">
                                        <a href="javascript:void(0)">
                                            <img class="card-img-top" src={account3} alt="account" />
                                            <ul class="rating-detail d-flex">
                                                <li>
                                                    <span class="icon-trophy"></span>
                                                    <p>87 champs</p>
                                                </li>
                                                <li>
                                                    <span class="icon-dollar"></span>
                                                    <p>18 skins</p>
                                                </li>
                                                <li>
                                                    <span class="icon-star"></span>
                                                    <p>Level 72</p>
                                                </li>
                                            </ul>
                                            <div class="card-body">
                                                <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                                <ul class="rank-block d-flex">
                                                    <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                                    <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                                </ul>
                                                <h6 class="price">160.00 EUR</h6>
                                            </div>
                                        </a>
                                        <div class="overlayer">
                                            <div class="inner-cnt">
                                                <div class="wrap-link">
                                                    <a class="btn btn-secondary" href="javascript:void(0)">Details</a>
                                                </div>
                                                <div class="wrap-date">
                                                    <div class="label">Creation Date:</div>
                                                    <div class="date">Sep 8, 2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-xl-3">
                                    <div class="card wow fadeInUp" data-wow-delay="0.8s">
                                        <a href="javascript:void(0)">
                                            <img class="card-img-top" src={account4} alt="account" />
                                            <ul class="rating-detail d-flex">
                                                <li>
                                                    <span class="icon-trophy"></span>
                                                    <p>87 champs</p>
                                                </li>
                                                <li>
                                                    <span class="icon-dollar"></span>
                                                    <p>18 skins</p>
                                                </li>
                                                <li>
                                                    <span class="icon-star"></span>
                                                    <p>Level 72</p>
                                                </li>
                                            </ul>
                                            <div class="card-body">
                                                <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                                <ul class="rank-block d-flex">
                                                    <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                                    <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                                </ul>
                                                <h6 class="price">287.00 EUR</h6>
                                            </div>
                                        </a>
                                        <div class="overlayer">
                                            <div class="inner-cnt">
                                                <div class="wrap-link">
                                                    <a class="btn btn-secondary" href="javascript:void(0)">Details</a>
                                                </div>
                                                <div class="wrap-date">
                                                    <div class="label">Creation Date:</div>
                                                    <div class="date">Jul 12, 2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-xl-3">
                                    <div class="card wow fadeInUp" data-wow-delay="0.2s">
                                        <a href="javascript:void(0)">
                                            <img class="card-img-top" src={account5} alt="account" />
                                            <ul class="rating-detail d-flex">
                                                <li>
                                                    <span class="icon-trophy"></span>
                                                    <p>87 champs</p>
                                                </li>
                                                <li>
                                                    <span class="icon-dollar"></span>
                                                    <p>18 skins</p>
                                                </li>
                                                <li>
                                                    <span class="icon-star"></span>
                                                    <p>Level 72</p>
                                                </li>
                                            </ul>
                                            <div class="card-body">
                                                <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                                <ul class="rank-block d-flex">
                                                    <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                                    <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                                </ul>
                                                <h6 class="price">287.00 EUR</h6>
                                            </div>
                                        </a>
                                        <div class="overlayer">
                                            <div class="inner-cnt">
                                                <div class="wrap-link">
                                                    <a class="btn btn-secondary" href="javascript:void(0)">Details</a>
                                                </div>
                                                <div class="wrap-date">
                                                    <div class="label">Creation Date:</div>
                                                    <div class="date">Apr 18, 2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-xl-3">
                                    <div class="card wow fadeInUp" data-wow-delay="0.4s">
                                        <a href="javascript:void(0)">
                                            <img class="card-img-top" src={account6} alt="account" />
                                            <ul class="rating-detail d-flex">
                                                <li>
                                                    <span class="icon-trophy"></span>
                                                    <p>87 champs</p>
                                                </li>
                                                <li>
                                                    <span class="icon-dollar"></span>
                                                    <p>18 skins</p>
                                                </li>
                                                <li>
                                                    <span class="icon-star"></span>
                                                    <p>Level 72</p>
                                                </li>
                                            </ul>
                                            <div class="card-body">
                                                <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                                <ul class="rank-block d-flex">
                                                    <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                                    <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                                </ul>
                                                <h6 class="price">287.00 EUR</h6>
                                            </div>
                                        </a>
                                        <div class="overlayer">
                                            <div class="inner-cnt">
                                                <div class="wrap-link">
                                                    <a class="btn btn-secondary" href="javascript:void(0)">Details</a>
                                                </div>
                                                <div class="wrap-date">
                                                    <div class="label">Creation Date:</div>
                                                    <div class="date">May 22, 2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-xl-3">
                                    <div class="card wow fadeInUp" data-wow-delay="0.6s">
                                        <a href="javascript:void(0)">
                                            <img class="card-img-top" src={account7} alt="account" />
                                            <ul class="rating-detail d-flex">
                                                <li>
                                                    <span class="icon-trophy"></span>
                                                    <p>87 champs</p>
                                                </li>
                                                <li>
                                                    <span class="icon-dollar"></span>
                                                    <p>18 skins</p>
                                                </li>
                                                <li>
                                                    <span class="icon-star"></span>
                                                    <p>Level 72</p>
                                                </li>
                                            </ul>
                                            <div class="card-body">
                                                <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                                <ul class="rank-block d-flex">
                                                    <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                                    <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                                </ul>
                                                <h6 class="price">287.00 EUR</h6>
                                            </div>
                                        </a>
                                        <div class="overlayer">
                                            <div class="inner-cnt">
                                                <div class="wrap-link">
                                                    <a class="btn btn-secondary" href="javascript:void(0)">Details</a>
                                                </div>
                                                <div class="wrap-date">
                                                    <div class="label">Creation Date:</div>
                                                    <div class="date">May 15, 2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-xl-3">
                                    <div class="card wow fadeInUp" data-wow-delay="0.8s">
                                        <a href="javascript:void(0)">
                                            <img class="card-img-top" src={account8} alt="account" />
                                            <ul class="rating-detail d-flex">
                                                <li>
                                                    <span class="icon-trophy"></span>
                                                    <p>87 champs</p>
                                                </li>
                                                <li>
                                                    <span class="icon-dollar"></span>
                                                    <p>18 skins</p>
                                                </li>
                                                <li>
                                                    <span class="icon-star"></span>
                                                    <p>Level 72</p>
                                                </li>
                                            </ul>
                                            <div class="card-body">
                                                <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                                <ul class="rank-block d-flex">
                                                    <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                                    <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                                </ul>
                                                <h6 class="price">287.00 EUR</h6>
                                            </div>
                                        </a>
                                        <div class="overlayer">
                                            <div class="inner-cnt">
                                                <div class="wrap-link">
                                                    <a class="btn btn-secondary" href="javascript:void(0)">Details</a>
                                                </div>
                                                <div class="wrap-date">
                                                    <div class="label">Creation Date:</div>
                                                    <div class="date">Aug 26, 2020</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <button type="button" id="loadMore" class="btn btn-primary text-uppercase wow fadeInUp mt-md-4 px-5" data-wow-delay="0.8s">Load More</button>
                                </div>
                            </div>
                        </div>
                    </section>
                */}
                        <SectionTopRated></SectionTopRated>
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

