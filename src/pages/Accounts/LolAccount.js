import React, { Component } from 'react';
import { connect } from 'react-redux';
import cart from '../../assets/images/cart.svg'
import sell from '../../assets/images/sell.svg'
import Slide from 'react-reveal/Slide';
import WOW from 'wowjs';

import { getQueue, getServer, getRank, getAccount, getFilterAccount, getLolAccount, getUnrankedAccount, getCustomizeAccount } from '../../store/actions/accountAction'

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
            current_rank_id: '',
            server_id: '',
            queue_id: '',
            level_up: '',
            min_value: 0,
            max_value: 2000,


        };
    }

    componentWillUnmount() {

        this.state = {
            unmounting: true, // can't use setState because it is async
        };
    }

    componentDidUpdate(prevProps) {


        new WOW.WOW({
            live: false
        }).init();
    }

    componentDidMount() {

        // this.props.i18n.changeLanguage("de");

        new WOW.WOW({
            live: false
        }).init();
        if (window.location.pathname === '/lolaccount') {
            this.setState({page: 'lolAccount'})
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
        } else if (this.state.page === 'unrankedAccount') {
            this.setState({page: 'unrankedAccount'})
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
        } else if (this.state.page === 'customizeAccount') {
            this.setState({page: 'customizeAccount'})

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

    onClickAccount = (item) => {

        console.log(item)
      
        this.props.history.push("/accountdetail", { item: item })

    }


    onChangeSlider = (e, min, max) => {
        console.log(min + ' ' + max)
        this.setState({ min_value: min, max_value: max }, () => { this.onFilterAccount() })
    }
    onChange = (e) => {
        if (e.target.value == -1) {
            this.setState({ [e.target.name]: "" }, () => { this.onFilterAccount() })
            return
        }
        this.setState({ [e.target.name]: e.target.value }, () => { this.onFilterAccount() })
    }
    _handleKeyDown = (list, e) => {
        console.log("here", [e.target.value])
        if (e.target.value == -1) {
            this.setState({ [e.target.name]: "" }, () => { this.onFilterAccount() })
            return
        }
        if (e.target.value == 0) {
            return
        }
        if (list[e.target.value]) {
            console.log(list[e.target.value])
            this.setState({ [e.target.name]: e.target.value }, () => { this.onFilterAccount() })
        }
    }

    onFilterAccount = () => {
        let data = {
            "server_id": this.state.server_id,
            "queue_id": this.state.queue_id,
            "current_rank_id": this.state.current_rank_id,
            "level_up": this.state.level_up,
            "min_price": this.state.min_value,
            "max_price": this.state.max_value,
        }
        this.props.getFilterAccount(data).then((res) => {
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
    onTabChange = (type) => {
        console.log(type)
        if (type === 'lolAccount') {
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
        } else if (type === 'unrankedAccount') {
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
        } else if (type === 'customizeAccount') {
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



        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }
        return (
            <div key={this.props.page} class="wrapper">

                {/* <!-- Banner section --> */}
                <section class="banner-section section-background-image" >
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-12 text-center">
                                {this.state.page === 'lolAccount' ? (
                                    <Flip top delay={900}>
                                        <div>
                                            <h1 class="wow flipInX mt-5 mt-md-3" data-wow-delay="0.6s">LEAGUE OF LEGENDS
                           <br></br>ACCOUNTS
                        </h1>
                                        </div>
                                    </Flip>
                                ) : this.state.page === 'unrankedAccount' ? (

                                    <Flip top delay={900}>
                                        <div>

                                            <h1 class="wow flipInX mt-5 mt-md-3" data-wow-delay="0.8s">Unranked<br></br>ACCOUNTS</h1>
                                        </div>

                                    </Flip>

                                ) : (
                                            <Flip top delay={900}>
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
                                    <Slide left delay={200}>
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
                                    </Slide>                                </div>
                                <div class="col-md-6">
                                    <Slide right delay={200}>
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
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Search Filter --> */}
                    <Fade bottom>

                        <SectionAcountFilter
                            price_range={this.state.price_range}
                            page={this.state.page}
                            queueList={this.state.queueList}
                            serverList={this.state.serverList}
                            rankList={this.state.rankList}
                            renderQueueOption={this.renderOption(this.state.queueList)}
                            renderRankOption={this.renderRankOption(this.state.rankList)}
                            renderServerOption={this.renderServerOption(this.state.serverList)}
                            server_id={this.state.server}
                            rank_id={this.state.rank_id}
                            queue_id={this.state.queue}
                            onTabChange={(e) => this.onTabChange(e)}
                            _handleKeyDown={this._handleKeyDown}
                            onChange={this.onChange}
                            onChangeSlider={this.onChangeSlider}
                        >

                        </SectionAcountFilter>
                    </Fade>

                    {/* <!-- Top Rated Accounts --> */}

                    <SectionTopRated
                        page={this.state.page}
                        accountList={this.state.accountList}
                        onClickAccount = {this.onClickAccount}
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
    getFilterAccount,
    getQueue,
    getServer,
    getRank,
    getLolAccount,
    getUnrankedAccount,
    getCustomizeAccount
})
export default connect(mapStatetoProps, mapDispatchToProps)(LolAccount);