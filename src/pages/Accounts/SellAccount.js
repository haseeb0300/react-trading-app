import React, { Component } from 'react';


import master_img from '../../assets/images/master.png'
import visa_img from '../../assets/images/visa.png'
import paypal_img from '../../assets/images/paypal.png'
import skrill_img from '../../assets/images/skrill.png'
import stripe_img from '../../assets/images/stripe.png'

import { Link, } from 'react-router-dom';
import WOW from 'wowjs';
import { connect } from 'react-redux';


import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { getQueue, getServer, getRank, postAccount } from '../../store/actions/accountAction'

class SellAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type:{
                tos:false,
                agreements:false,
                consent:false,
                verification:false,

            },
            serverError: {},
            isLoading: false,
            amount_of_rp: "",
            account_title: "",
            level: "",
            price: "",
            user_name: "",
            user_email: "",
            last_season_rank_ID: "",
            amount_of_blue_essence: "",
            level_up: "",
            champions_owned: "",
            description: "",
            skin_owned: "",
            verified_email: "",
            currency: "",
            password: "",
            current_rank_id: "",
            queue_id: "",
            server_id: "",
            queueList: [],
            serverList: [],
            rankList: [],
            "tab_index": true,



        };
        this.inputRef = [];
    }
    componentDidMount() {
        // this.props.i18n.changeLanguage("de");
        new WOW.WOW({
            live: false
        }).init();
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

    onCheckBoxChange = (event) => {
        console.log("HERE")
        this.setState(prevState => ({
            type: {
                ...prevState.type,
                [event]: !prevState.type[event]
            }
        }))
    }
    _handleKeyDown = (list, e) => {
        console.log("here", [e.target.value])
        if (e.target.value == 0) {
            return
        }
        if (list[e.target.value]) {
            console.log(list[e.target.value])
            this.setState({ [e.target.name]: e.target.value })
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
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    toggleIndex = () => {
        this.setState({ tab_index: !this.state.tab_index })
    }

    onSubmit = (e) => {
        e.preventDefault()
        var data = {
            "amount_of_rp": this.state.amount_of_rp,
            "account_title": this.state.account_title,
            "level": this.state.level,
            "price": this.state.price,
            "user_name": this.state.user_name,
            "user_email": this.state.user_email,
            "last_season_rank_ID": this.state.last_season_rank_ID,
            "amount_of_blue_essence": this.state.amount_of_blue_essence,
            "level_up": this.state.level_up,
            "champions_owned": this.state.champions_owned,
            "description": this.state.description,
            "skin_owned": this.state.skin_owned,
            "verified_email": this.state.verified_email,
            "currency": this.state.currency,
            "user_name": this.state.user_name,
            "password": this.state.password,
            "current_rank_id": this.state.current_rank_id,
            "queue_id": this.state.queue_id,
            "server_id": this.state.server_id,

        }
        console.log("data", data)

        this.props.postAccount(data).then((res) => {
            console.log(res)
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
                <section class="banner-section" >
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-12 text-center">
                                <Flip bottom delay={200}>
                                    <h1 class="wow flipInX mt-3" data-wow-delay="0.6s">Sell Your Account</h1>
                                </Flip>

                            </div>
                        </div>
                    </div>
                </section>
                <main>
                    <section class="user-section wow fadeInUp" data-wow-delay="1s">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-12">
                                    <div class="sell-account-form ">

                                        <div class="select-selling-method ">
                                            <button className={this.state.tab_index ? "switch-account-btn switch-account-btn-active" : "switch-account-btn"} onClick={this.toggleIndex}>REGULAR SELL</button>
                                            <button className={this.state.tab_index ? "switch-account-btn" : "switch-account-btn switch-account-btn-active"} onClick={this.toggleIndex}>COMFORT SELL</button>
                                        </div>
                                        <label className="title">ACCOUNT INFO FORM</label>
                                        <hr></hr>
                                        {this.state.tab_index &&

                                            <form>
                                                <div class="form-group">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <label>Amount of Rp</label>
                                                            <input class="form-control" name="amount_of_rp" onChange={this.onChange} required="" />
                                                            <label>Server</label>
                                                            <select class="custom-select" name="server_id" onClick={(e) => this._handleKeyDown(this.state.serverList, e)} onChange={this.onChange} onKeyUp={(e) => this._handleKeyDown(this.state.serverList, e)} >

                                                                {this.renderServerOption(this.state.serverList)}

                                                            </select>
                                                            <label>Level of Account</label>
                                                            <input class="form-control" name="level" onChange={this.onChange} required="" />
                                                            <label>Price</label>
                                                            <input class="form-control" name="price" onChange={this.onChange} required="" />
                                                            <label>LoL Username</label>
                                                            <input class="form-control" name="user_name" onChange={this.onChange} required="" />
                                                            <label>LoL Account Email</label>
                                                            <input class="form-control" name="user_email" onChange={this.onChange} required="" />


                                                        </div>
                                                        <div class="col-md-4 ">
                                                            <label>Amount of Blue Essence</label>
                                                            <input class="form-control" name="amount_of_blue_essence" onChange={this.onChange} required="" />
                                                            <label>Champions Owned</label>
                                                            <input class="form-control" name="champions_owned" onChange={this.onChange} required="" />
                                                            <label>Type of queue</label>
                                                            <select class="custom-select" name="queue_id" onClick={(e) => this._handleKeyDown(this.state.queueList, e)} onChange={this.onChange} onKeyUp={(e) => this._handleKeyDown(this.state.queueList, e)} >

                                                                {this.renderOption(this.state.queueList)}
                                                            </select>
                                                            <label>Currency</label>
                                                            <select class="custom-select" name="currency" onChange={this.onChange} required="">
                                                                <option value={"USD"}>USD</option>
                                                                <option value={"EURO"}>EURO</option>
                                                            </select>
                                                            <label>Password</label>
                                                            <input type="password" class="form-control" name="password" onChange={this.onChange} required="" />
                                                            <label>E-mail Password</label>
                                                            <input type="password" class="form-control" name="email_password" onChange={this.onChange} required="" />

                                                        </div>
                                                        <div class="col-md-4 ">
                                                            <label>Rank of Account</label>
                                                            <select class="custom-select" name="current_rank_id" onClick={(e) => this._handleKeyDown(this.state.rankList, e)} onChange={this.onChange} onKeyUp={(e) => this._handleKeyDown(this.state.rankList, e)} >
                                                                {this.renderRankOption(this.state.rankList)}
                                                            </select>
                                                            <label>Skins Owned</label>
                                                            <input class="form-control" name="skin_owned" onChange={this.onChange} required="" />
                                                            <label>Last Season Rank</label>
                                                            <select class="custom-select" name="last_season_rank_ID" onClick={(e) => this._handleKeyDown(this.state.rankList, e)} onChange={this.onChange} onKeyUp={(e) => this._handleKeyDown(this.state.rankList, e)} >
                                                                {this.renderRankOption(this.state.rankList)}
                                                            </select>
                                                        </div>

                                                    </div>

                                                    <div class="row">

                                                        <div class="col-md-12">
                                                            <div class="block-name">
                                                                <h6 class=" ">Selling tips: </h6>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">

                                                        <div class="col-md-12">
                                                            <ul class="list">
                                                                <li class="item">
                                                                    <p>Double check your username/password</p>
                                                                </li>
                                                                <li class="item">
                                                                    <p>Remove phone number and security questions from your email</p>
                                                                </li>
                                                                <li class="item">
                                                                    <p>Allowed email providers: ProtonMail, GMX, Yandex, Guerilla Mail, Tutanota, Mailnator, Openmailbox</p>
                                                                </li>
                                                                <li class="item">
                                                                    <p>Upload high-quality images with hidden summoner names</p>
                                                                </li>
                                                            </ul>


                                                        </div>

                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <label>Level-up</label>
                                                            <select class="custom-select" name="level_up" onChange={this.onChange} required="" >
                                                                <option value={"None"}>None</option>
                                                                <option value={"Handmade"}>Handmade</option>
                                                                <option value={"Botted"}>Botted</option>

                                                            </select>
                                                        </div>
                                                        <div class="col-md-4 ">
                                                            <label>Verified email:</label>
                                                            <select class="custom-select" name="verified_email" onChange={this.onChange} required="">
                                                                <option value={"No"}>No</option>
                                                                <option value={"Yes"}>Yes</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-4 ">
                                                            <label>Photos</label>
                                                            <input type="file" class="" />
                                                        </div>
                                                        <div class="col-md-12 ">
                                                            <label>Account description</label>
                                                            <textarea class="form-control" name="description" onChange={this.onChange} required="" />
                                                        </div>
                                                    </div>

                                                    <div class="row">

                                                        <div class="col-md-12">
                                                            <div class="extra-options">
                                                                <div class="list-checkbox">
                                                                    <div className="col-sm-3 col-lg-3  col-md-3 col-xl-2   col-4 p-0 ">
                                                                    </div>
                                                                    <div class="fx-checkbox">
                                                                        <label onClick={(e) => this.onCheckBoxChange("tos")}><input type="checkbox" name="tos" />Terms of Service</label>
                                                                    </div>
                                                                    <div class="fx-checkbox">
                                                                        <label onClick={(e) => this.onCheckBoxChange("agreements")}><input type="checkbox" name="agreements" />Seller Agreement</label>
                                                                    </div>
                                                                    <div class="fx-checkbox">
                                                                        <label onClick={(e) => this.onCheckBoxChange("consent")}><input type="checkbox" name="consent" />I did not use this account for atleast 7 days.</label>
                                                                    </div>
                                                                    <div class="fx-checkbox">
                                                                        <label onClick={(e) => this.onCheckBoxChange("verification")}><input type="checkbox" name="verification" />I have removed two step verification from my email.</label>
                                                                    </div>
                                                                </div>
                                                                <div class="information">
                                                                    <a href="#" target="_self">How it works?</a>
                                                                </div>
                                                            </div>



                                                        </div>

                                                    </div>




                                                </div>
                                                <div className="sell-bt">
                                                    <button onClick={this.onSubmit} class="btn-action">Sell My Account</button>
                                                </div>
                                            </form>

                                        }
                                        {!this.state.tab_index &&

                                            <form>
                                                <div class="form-group">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <label>Account Name</label>
                                                            <input class="form-control" name="amount_of_rp" onChange={this.onChange} required="" />

                                                            <label>Account E-mail </label>
                                                            <input class="form-control" name="level" onChange={this.onChange} required="" />
                                                            <label>Currency</label>
                                                            <select class="custom-select" name="currency" onChange={this.onChange} required="">
                                                                <option value={"USD"}>USD</option>
                                                                <option value={"EURO"}>EURO</option>
                                                            </select>

                                                        </div>
                                                        <div class="col-md-4 ">
                                                            <label>Password</label>
                                                            <input type="password" class="form-control" name="password" onChange={this.onChange} required="" />
                                                            <label>E-mail Password</label>
                                                            <input type="password" class="form-control" name="email_password" onChange={this.onChange} required="" />
                                                            <label>Last Season Rank</label>
                                                            <select class="custom-select" name="last_season_rank_ID" onClick={(e) => this._handleKeyDown(this.state.rankList, e)} onChange={this.onChange} onKeyUp={(e) => this._handleKeyDown(this.state.rankList, e)} >
                                                                {this.renderRankOption(this.state.rankList)}
                                                            </select>

                                                        </div>
                                                        <div class="col-md-4 ">
                                                            <label>Server</label>
                                                            <select class="custom-select" name="server" onClick={(e) => this._handleKeyDown(this.state.serverList, e)} onChange={this.onChange} onKeyUp={(e) => this._handleKeyDown(this.state.serverList, e)} >
                                                                {this.renderServerOption(this.state.serverList)}
                                                            </select>
                                                            <label>Price</label>
                                                            <input class="form-control" name="skin_owned" onChange={this.onChange} required="" />
                                                        </div>

                                                    </div>

                                                    <div class="row">

                                                        <div class="col-md-12">
                                                            <div class="block-name">
                                                                <h6 class=" ">Selling tips: </h6>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">

                                                        <div class="col-md-12">
                                                            <ul class="list">
                                                                <li class="item">
                                                                    <p>Double check your username/password</p>
                                                                </li>
                                                                <li class="item">
                                                                    <p>Remove phone number and security questions from your email</p>
                                                                </li>
                                                                <li class="item">
                                                                    <p>Allowed email providers: ProtonMail, GMX, Yandex, Guerilla Mail, Tutanota, Mailnator, Openmailbox</p>
                                                                </li>
                                                                <li class="item">
                                                                    <p>Upload high-quality images with hidden summoner names</p>
                                                                </li>
                                                            </ul>


                                                        </div>

                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <label>Level-up</label>
                                                            <select class="custom-select" name="level_up" onChange={this.onChange} required="" >
                                                                <option value={"None"}>None</option>
                                                                <option value={"Handmade"}>Handmade</option>
                                                                <option value={"Botted"}>Botted</option>

                                                            </select>
                                                        </div>
                                                        <div class="col-md-4 ">
                                                            <label>Verified email:</label>
                                                            <select class="custom-select" name="verified_email" onChange={this.onChange} required="">
                                                                <option value={"No"}>No</option>
                                                                <option value={"Yes"}>Yes</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-4 ">
                                                            <label>Photos</label>
                                                            <input type="file" class="" />
                                                        </div>
                                                        <div class="col-md-12 ">
                                                            <label>Account description</label>
                                                            <textarea class="form-control" name="description" onChange={this.onChange} required="" />
                                                        </div>
                                                    </div>

                                                    <div class="row">

                                                        <div class="col-md-12">
                                                            <div class="extra-options">
                                                                <div class="list-checkbox">
                                                                    <div class="fx-checkbox">
                                                                        <label><input type="checkbox" name="tos" />Terms of Service</label>
                                                                    </div>
                                                                    <div class="fx-checkbox">
                                                                        <label><input type="checkbox" name="agreements" />Seller Agreement</label>
                                                                    </div>
                                                                    <div class="fx-checkbox">
                                                                        <label><input type="checkbox" name="consent" />I did not use this account for atleast 7 days.</label>
                                                                    </div>
                                                                    <div class="fx-checkbox">
                                                                        <label><input type="checkbox" name="verification" />I have removed two step verification from my email.</label>
                                                                    </div>
                                                                </div>
                                                                <div class="information">
                                                                    <a href="#" target="_self">How it works?</a>
                                                                </div>
                                                            </div>



                                                        </div>

                                                    </div>




                                                </div>
                                                <div className="sell-bt">
                                                    <button onClick={this.onSubmit} class="btn-action">Sell My Account</button>
                                                </div>
                                            </form>

                                        }
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
                </main >

            </div >




        )
    }

}

SellAccount.propTypes = {

};

const mapStatetoProps = ({ auth }) => ({
    user: auth.user
})
const mapDispatchToProps = ({
    getQueue,
    getServer,
    getRank,
    postAccount,
})
export default connect(mapStatetoProps, mapDispatchToProps)(SellAccount);

