import React, { Component } from 'react';
import { connect } from 'react-redux';

import cart from '../../assets/images/cart.svg'
import sell from '../../assets/images/sell.svg'



import WOW from 'wowjs';

import { getQueue, getServer, getRank,getAccount ,getLolAccount, getUnrankedAccount,getCustomizeAccount } from '../../store/actions/accountAction'

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
            rankList: [],
            serverList: [],
            queueList: [],


        };
    }

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
        if(this.props.page === 'lolAccount'){
        this.props.getLolAccount().then((res) => {
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
    }else if(this.props.page === 'unrankedAccount'){
        this.props.getUnrankedAccount().then((res) => {
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
    }else if(this.props.page === 'customizeAccount'){
        this.props.getCustomizeAccount().then((res) => {
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

        this.props.getQueue().then((res) => {
            console.log(res)
            if (res.status == true) {
                this.setState({
                    queueList: res.content,
                })
            }
            else {
                alert(res)
            }
        }).catch((err) => {
            console.log(err)

        })
        this.props.getServer().then((res) => {
            console.log(res)
            if (res.status == true) {
                this.setState({
                    serverList: res.content,
                })
            }
            else {
                alert(res)
            }
        }).catch((err) => {
            console.log(err)

        })
        this.props.getRank().then((res) => {
            console.log(res)
            if (res.status == true) {
                this.setState({
                    rankList: res.content,
                })
            }
            else {
                alert(res)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    renderOption = (list) => {
        return list.map((item, i) =>
            <option value={item.queue_id}>{item.queue_name}</option>
        )
    }
    renderServerOption = (list) => {
        return list.map((item, i) =>
            <option value={item.server_id}>{item.server_name}</option>
        )
    }
    renderRankOption = (list) => {
        return list.map((item, i) =>
            <option value={item.rank_id}>{item.rank}</option>
        )
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
                                {this.props.page === 'lolAccount' ? (
                                    <Flip top delay={900}>
                                        <div>
                                            <h1 class="wow flipInX mt-5 mt-md-3" data-wow-delay="0.6s">LEAGUE OF LEGENDS
                           <br></br>ACCOUNTS
                        </h1>
                                        </div>
                                    </Flip>
                                ) : this.props.page === 'unrankedAccount' ? (

                                    <Flip top delay={900}>
                                        <div>

                                            <h1 class="wow flipInX mt-5 mt-md-3" data-wow-delay="0.8s">Unranked<br></br>ACCOUNTS</h1>
                                        </div>

                                    </Flip>

                                ) : (
                                            <Flip top delay={300}>
                                                <div>

                                                    <h1 class="wow flipInX mt-5 mt-md-3" data-wow-delay="0.6s">
                                                        Customized <br></br>ACCOUNTS
                                 </h1>
                                                </div>
                                            </Flip>
                                        )}
                                <Flip top delay={900}>

                                    <p class="wow fadeInUp" data-wow-delay="1s"><strong>LOL Trading is a professional marketplace for buyers & sellers
                           <br className="d-none d-md-block"></br>of League of Legends accounts.</strong>
                                    </p>
                                </Flip>

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
                                    <Fade left delay={200}>
                                        <div>

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
                                        </div>
                                    </Fade>                                </div>
                                <div class="col-md-6">
                                    <Fade right delay={200}>
                                        <div>
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
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Search Filter --> */}
                    <Fade bottom>

                        <SectionAcountFilter
                            price_range={this.state.price_range}
                            page={this.props.page}
                            queueList={this.state.queueList}
                            serverList={this.state.serverList}
                            rankList={this.state.rankList}
                            renderQueueOption={this.renderOption(this.state.queueList)}
                            renderRankOption={this.renderRankOption(this.state.rankList)}
                            renderServerOption={this.renderServerOption(this.state.serverList)}
                            server_id={this.state.server_id}
                            rank_id={this.state.rank_id}
                            queue_id={this.state.queue_id}
                        >

                        </SectionAcountFilter>
                    </Fade>

                    {/* <!-- Top Rated Accounts --> */}

                    <SectionTopRated
                        page={this.state.page}
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
    getAccount,
    getQueue,
    getServer,
    getRank,
    getLolAccount, 
    getUnrankedAccount,
    getCustomizeAccount
})
export default connect(mapStatetoProps, mapDispatchToProps)(LolAccount);