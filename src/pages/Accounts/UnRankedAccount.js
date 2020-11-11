import React, { Component } from 'react';
import { connect } from 'react-redux';

import cart from '../../assets/images/cart.svg'
import sell from '../../assets/images/sell.svg'
 
 
import WOW from 'wowjs';
import SectionAcountFilter from '../../component/dashboadSection/SectionAcountFilter';
import { getAccount } from '../../store/actions/accountAction'

 
 
import SectionTopRated from "../../component/dashboadSection/SectionTopRated"
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

class UnRankedAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,
            page:"unrankedAccount",
            accountList: [],

        };
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
                <section class="banner-section section-background-image">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-12 text-center">
                            <Flip bottom delay={200}>

                                <h1 class="wow flipInX mt-5 mt-md-3" data-wow-delay="0.6s">Unranked<br></br>ACCOUNTS</h1>
                                </Flip>
                                <Fade bottom delay={300}>

                                <p class="wow fadeInUp" data-wow-delay="1s">
                                    <strong>LOL Trading is a professional marketplace for buyers & sellers<br class="d-none d-md-block"></br>of League of Legends accounts.</strong>
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
                                    <a  >
                                        <div class="card wow fadeInLeft" data-wow-delay="0.4s">
                                            <div class="card-body">
                                                <div class="media">
                                                    <img src={cart} alt="cart" />
                                                    <div class="media-body ml-3 ml-md-4">
                                                        <h3 class="mb-0">
                                                            HOW TO PURCHASE <br></br>LEAGUE OF LEGENDS ACCOUNT
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-6">
                                    <a  >
                                        <div class="card sell-block wow fadeInRight" data-wow-delay="0.4s">
                                            <div class="card-body">
                                                <div class="media">
                                                    <img src={sell} alt="sell" />
                                                    <div class="media-body ml-3 ml-md-4">
                                                        <h3 class="mb-0">
                                                            HOW TO Sell <br></br>  LEAGUE OF LEGENDS ACCOUNT
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
                            page = {this.state.page}>
                        </SectionAcountFilter>
                  </Fade>
                    {/* <!-- Top Rated Accounts --> */}
                    <SectionTopRated
                     page= {this.state.page}
                     accountList={this.state.accountList}></SectionTopRated>
                </main>
            
            </div>
        
        )
    }

}

UnRankedAccount.propTypes = {
    
};

const mapDispatchToProps = ({
    getAccount
})
const mapStatetoProps = ({ auth }) => ({
    user: auth.user
})
export default connect(mapStatetoProps, mapDispatchToProps) (UnRankedAccount);

