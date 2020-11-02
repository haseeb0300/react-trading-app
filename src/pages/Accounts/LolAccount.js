import React, { Component } from 'react';
import { connect } from 'react-redux';

import cart from '../../assets/images/cart.svg'
import sell from '../../assets/images/sell.svg'



import WOW from 'wowjs';
import { getAccount } from '../../store/actions/accountAction'


import SectionTopRated from "../../component/dashboadSection/SectionTopRated"
import SectionAcountFilter from '../../component/dashboadSection/SectionAcountFilter';
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
            accountList: [],


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
        this.props.getAccount().then((res) => {
            console.log(res)
            if (res.status == true) {
                this.setState({
                    accountList: res.content,
                })
            }
            else {
                alert(res)
            }
        }).catch((err) => {
            console.log(err)

        })
    }


    render() {

        // const { t, i18n } = this.props

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

                                        <a  >
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
                                    <a  >
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
                        accountList={this.state.accountList}
                    ></SectionTopRated>
                </main>

            </div>




        )
    }

}

LolAccount.propTypes = {

};

const mapStatetoProps = ({ auth }) => ({
    user: auth.user
})
const mapDispatchToProps = ({
    getAccount
})
export default connect(mapStatetoProps, mapDispatchToProps)(LolAccount);

