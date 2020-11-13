import React, { Component, useRef } from 'react';


import master_img from '../../assets/images/master.png'
import visa_img from '../../assets/images/visa.png'
import paypal_img from '../../assets/images/paypal.png'
import skrill_img from '../../assets/images/skrill.png'
import stripe_img from '../../assets/images/stripe.png'
import { v4 } from 'uuid';

import { Link, } from 'react-router-dom';
import WOW from 'wowjs';
import { connect } from 'react-redux';
import Noty from 'noty';
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/mint.css";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { getQueue, getServer, getRank, postRegularSellAccount, postComfortSellAccount, postBulkRegularSellAccount, postBulkComfortSellAccount } from '../../store/actions/accountAction'
import { Checkbox, CheckboxGroup } from '@trendmicro/react-checkbox';
import { Widget } from "@uploadcare/react-widget";
import Uploadbtn from "../../component/dashboadSection/uploadbtn"
import PaymentComponent from "../../component/dashboadSection/PaymentComponent"
import UserHeader from "../../component/dashboadSection/UserHeader"
import Slide from 'react-reveal/Slide';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-checkbox/dist/react-checkbox.css';

class SellAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: {
                tos: false,
                agreements: false,
                consent: false,
                verification: false,
                bulk: false,

            },
            errors: {},
            serverError: {},
            isLoading: false,
            amount_of_rp: "40",
            account_title: "a",
            level: "20",
            price: "450",
            user_name: "usama",
            user_email: "u@gmail.com",
            last_season_rank_ID: "5",
            amount_of_blue_essence: "45",
            level_up: "None",
            champions_owned: "53",
            description: "scacas",
            skin_owned: "30",
            verified_email: "No",
            currency: "EUR",
            password: "123456",
            current_rank_id: "2",
            queue_id: "1",
            server_id: "1",
            queueList: [],
            serverList: [],
            rankList: [],
            imageList: [],
            password_comfort: "",
            server_id_comfort: "",
            user_email_comfort: "",
            price_comfort: "",
            currency_comfort: "",
            last_season_rank_ID_comfort: "",
            "tab_index": true,
            "sell_type": "regularSell",
            table_list: [2, 3, 4, 5, 6, 7, 8, 9, 10],
            account_email: "",
            user_accounts: [
                { "unique_key": '2', "user_name": "", "password": "" },
                { "unique_key": '3', "user_name": "", "password": "" },
                { "unique_key": '4', "user_name": "", "password": "" },
                { "unique_key": '5', "user_name": "", "password": "" },
                { "unique_key": '6', "user_name": "", "password": "" },
                { "unique_key": '7', "user_name": "", "password": "" },
                { "unique_key": '8', "user_name": "", "password": "" },
                { "unique_key": '9', "user_name": "", "password": "" },
                { "unique_key": '10', "user_name": "", "password": "" },
            ],
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
    onUploadImage = (file) => {
        let images = this.state.imageList
        console.log(file)


        images.push(
            file
        );

        this.setState({
            imageList: images
        }, () => console.log(this.state.imageList))
    }
    handleBulkAccountChange = (idx, evt) => {
        console.log(idx)
        console.log(evt.target.value)

        const newUserAccounts = this.state.user_accounts.map((item, sidx) => {
            if (idx !== sidx) return item;
            return { ...item, [evt.target.name]: evt.target.value };
        });
        console.log(this.state.user_accounts)
        this.setState({ user_accounts: newUserAccounts });
    };
    renderTableRows = () => {
        return this.state.user_accounts.map((item, i) =>
            <tr>
                <td className="table-row">{item.unique_key}</td>
                <td className="table-row"><input type="text" value={item.user_name} name="user_name" onChange={(evt) => this.handleBulkAccountChange(i, evt)} /></td>
                <td className="table-row"><input type="password" value={item.password} name="password" onChange={(evt) => this.handleBulkAccountChange(i, evt)} /></td>
            </tr>
        )
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

    comfortSellTab = () => {
        if (this.state.sell_type == 'regularSell') {
            this.setState({ sell_type: 'comfortSell' })
            return
        }
        return
    }
    regularSellTab = () => {
        if (this.state.sell_type == 'comfortSell') {
            this.setState({ sell_type: 'regularSell' })
            return
        }
        return
    }
    handleError = (error) => {
        this.setState({ error });
    }
    onSubmit = (e) => {
        e.preventDefault()
        var accountList = []
        this.state.user_accounts.map(obj => {
            if (obj.user_name && obj.password) {
                accountList.push(obj)
            }
        });
        console.log(accountList)

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
            "images": this.state.imageList
        }
        var data_comfort = {
            "account_title": this.state.account_title,
            "price": this.state.price_comfort,
            "user_email": this.state.user_email_comfort,
            "last_season_rank_ID": this.state.last_season_rank_ID_comfort,
            "level_up": this.state.level_up,
            "description": this.state.description,
            "verified_email": this.state.verified_email,
            "currency": this.state.currency_comfort,
            "password": this.state.password_comfort,
            "server_id": this.state.server_id_comfort,
            "images": this.state.imageList,
        }


        var data_bulk = {
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
            "account": accountList,
            "images": this.state.imageList,
        }
        console.log("dataa", data)
        if (this.state.sell_type == 'regularSell' && !this.state.type.bulk) {

            this.props.history.push('/lolaccount')
               
               
            this.props.postRegularSellAccount(data).then((res) => {
                console.log(res)
                if (res.status) {

                    //this.props.history.push('/lolaccount')

                    new Noty({
                        text: "Succsessfully Inserted Account",
                        type: "success",
                        // timeout: 1000
                    }).show();
                    return
                }
                new Noty({
                    text: "Something went wrong",

                    type: "error",
                    // timeout: 1000
                }).show();

            }).catch((err) => {
                this.setState({ isLoading: false })
                console.log(err)
                var validationError = {}
                var serverError = []
                if (err.hasOwnProperty('validation')) {
                    err.validation.map(obj => {
                        if (obj.hasOwnProperty('param')) {
                            validationError[obj["param"]] = obj["msg"]
                        } else {
                            serverError = [...serverError, obj]
                        }
                    });
                    this.setState({ errors: validationError });
                    this.setState({ serverError: serverError });
                } else {
                    this.setState({ serverError: [{ "msg": "server not responding" }] })
                }
            })


        } else if (this.state.sell_type == 'comfortSell' && !this.state.type.bulk) {
            this.props.postComfortSellAccount(data_comfort).then((res) => {
                if (res.status) {
                    // this.props.history.push('/lolaccount')

                    new Noty({
                        text: "Succsessfully Inserted Account",

                        type: "success",
                        // timeout: 1000
                    }).show();
                    return
                }
                new Noty({
                    text: "Something went wrong",

                    type: "error",
                    // timeout: 1000
                }).show();
            }).catch((err) => {
                this.setState({ isLoading: false })
                console.log(err)
                var validationError = {}
                var serverError = []
                if (err.hasOwnProperty('validation')) {
                    err.validation.map(obj => {
                        if (obj.hasOwnProperty('param')) {
                            validationError[obj["param"]] = obj["msg"]
                        } else {
                            serverError = [...serverError, obj]
                        }
                    });
                    this.setState({ errors: validationError });
                    this.setState({ serverError: serverError });
                } else {
                    this.setState({ serverError: [{ "msg": "server not responding" }] })
                }
            })

        } else if (this.state.sell_type == 'regularSell' && this.state.type.bulk) {
            this.props.postBulkRegularSellAccount(data_bulk).then((res) => {
                console.log(res)
                if (res.status) {
                    //this.props.history.push('/lolaccount')


                    new Noty({
                        text: "Succsessfully Inserted Account",

                        type: "success",
                        timeout: 1000
                    }).show();
                    return
                }
                new Noty({
                    text: "Something went wrong",

                    type: "error",
                    // timeout: 1000
                }).show();
            }).catch((err) => {
                this.setState({ isLoading: false })
                console.log(err)
                var validationError = {}
                var serverError = []
                if (err.hasOwnProperty('validation')) {
                    err.validation.map(obj => {
                        if (obj.hasOwnProperty('param')) {
                            validationError[obj["param"]] = obj["msg"]
                        } else {
                            serverError = [...serverError, obj]
                        }
                    });
                    this.setState({ errors: validationError });
                    this.setState({ serverError: serverError });
                } else {
                    this.setState({ serverError: [{ "msg": "server not responding" }] })
                }
            })

        } else if (this.state.sell_type == 'comfortSell' && this.state.type.bulk) {
            this.props.postBulkComfortSellAccount(data_bulk).then((res) => {
                console.log(res)

                if (res.status) {

                    new Noty({
                        text: "Succsessfully Inserted Account",
                        layout: "topRight",
                        theme: "bootstrap-v4",
                        type: "success",
                        // timeout: 1000
                    }).show();
                    return
                }
                new Noty({
                    text: "Something went wrong",

                    type: "error",
                    // timeout: 1000
                }).show();
            }).catch((err) => {
                this.setState({ isLoading: false })
                console.log(err)
                var validationError = {}
                var serverError = []
                if (err.hasOwnProperty('validation')) {
                    err.validation.map(obj => {
                        if (obj.hasOwnProperty('param')) {
                            validationError[obj["param"]] = obj["msg"]
                        } else {
                            serverError = [...serverError, obj]
                        }
                    });
                    this.setState({ errors: validationError });
                    this.setState({ serverError: serverError });
                } else {
                    this.setState({ serverError: [{ "msg": "server not responding" }] })
                }
            })
        }
    }
    renderServerError() {
        if (this.state.serverError != null && this.state.serverError.length > 0) {
            return (
                <div className="form-row">
                    <div className="col-md-12  alert alert-danger" role="alert" >
                        <strong className="pr-2">Oh snap!  {"  "}</strong>
                        {this.state.serverError[0].msg}
                    </div>
                </div>
            )
        }
    }
    render() {
        // const { t, i18n } = this.props
        const { t, i18n } = this.props
        const { isLoading } = this.state;
        const { errors } = this.state
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
                                    <div>
                                        <h1 class="wow flipInX mt-3" data-wow-delay="0.6s">Sell Your Account</h1>
                                    </div>
                                </Flip>
                                <Fade bottom delay={900}>
                                    <p class="wow fadeInUp" data-wow-delay="1s"><strong>LOL Trading is a professional marketplace for buyers & sellers
                                    <br className="d-none d-md-block"></br>of League of Legends accounts.</strong>
                                    </p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </section>
                <main>
                    {/* <UserHeader>
                        </UserHeader>  */}
                    <section class="user-section wow fadeInUp" data-wow-delay="1s">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-12">
                                    <div class="sell-account-form ">

                                        <div class="select-selling-method ">
                                            <button className={this.state.sell_type == 'regularSell' ? "switch-account-btn switch-account-btn-active" : "switch-account-btn"} onClick={this.regularSellTab}>REGULAR SELL</button>
                                            <button className={this.state.sell_type == 'comfortSell' ? "switch-account-btn switch-account-btn-active" : "switch-account-btn"} onClick={this.comfortSellTab}>COMFORT SELL</button>
                                        </div>
                                        <label className="title">ACCOUNT INFO FORM</label>
                                        <hr></hr>


                                        <form>
                                            <div class="form-group">
                                                {this.state.sell_type == 'regularSell' &&
                                                    <div class="row">
                                                        <div class="col-md-4">

                                                            <label>Amount of Rp  </label>

                                                            <input class="form-control" name="amount_of_rp" onChange={this.onChange} required="" />
                                                            {errors.amount_of_rp && <div className=" invaliderror">{errors.amount_of_rp}</div>}
                                                            <label>Server</label>
                                                            <select class="custom-select" name="server_id" onClick={(e) => this._handleKeyDown(this.state.serverList, e)} onChange={this.onChange} onKeyUp={(e) => this._handleKeyDown(this.state.serverList, e)} >
                                                                <option value={-1} disable selected={!this.state.server_id} >--Select Server--</option>

                                                                {this.renderServerOption(this.state.serverList)}

                                                            </select>
                                                            {errors.server_id && <div className=" invaliderror">{errors.server_id}</div>}

                                                            <label>Level of Account</label>
                                                            <input class="form-control" name="level" onChange={this.onChange} required="" />
                                                            {errors.level && <div className=" invaliderror">{errors.level}</div>}

                                                            <label>Price</label>
                                                            <input class="form-control" name="price" onChange={this.onChange} required="" />
                                                            {errors.price && <div className=" invaliderror">{errors.price}</div>}

                                                            <label>LoL Username</label>
                                                            <input class="form-control" name="user_name" onChange={this.onChange} required="" />
                                                            {errors.user_name && <div className=" invaliderror">{errors.user_name}</div>}

                                                            <label>LoL Account Email</label>
                                                            <input class="form-control" name="user_email" onChange={this.onChange} required="" />
                                                            {errors.user_email && <div className=" invaliderror">{errors.user_email}</div>}



                                                        </div>
                                                        <div class="col-md-4 ">
                                                            <label>Amount of Blue Essence</label>
                                                            <input class="form-control" name="amount_of_blue_essence" onChange={this.onChange} required="" />
                                                            {errors.amount_of_blue_essence && <div className=" invaliderror">{errors.amount_of_blue_essence}</div>}

                                                            <label>Champions Owned</label>
                                                            <input class="form-control" name="champions_owned" onChange={this.onChange} required="" />
                                                            {errors.champions_owned && <div className=" invaliderror">{errors.champions_owned}</div>}

                                                            <label>Type of queue</label>
                                                            <select class="custom-select" name="queue_id" onClick={(e) => this._handleKeyDown(this.state.queueList, e)} onChange={this.onChange} onKeyUp={(e) => this._handleKeyDown(this.state.queueList, e)} >
                                                                <option value={-1} disable selected={!this.state.queue_id} >--Select Queue--</option>

                                                                {this.renderOption(this.state.queueList)}
                                                            </select>
                                                            {errors.queue_id && <div className=" invaliderror">{errors.queue_id}</div>}

                                                            <label>Currency</label>
                                                            <select class="custom-select" name="currency" onChange={this.onChange} required="">
                                                                <option value={-1} disable selected={!this.state.currency} >--Select Currency--</option>
                                                                <option value={"USD"}>USD</option>
                                                                <option value={"EUR"}>EUR</option>
                                                            </select>
                                                            {errors.currency && <div className=" invaliderror">{errors.currency}</div>}

                                                            <label>Password</label>
                                                            <input type="password" class="form-control" name="password" onChange={this.onChange} required="" />
                                                            {errors.password && <div className=" invaliderror">{errors.password}</div>}

                                                            <label>E-mail Password</label>
                                                            <input type="password" class="form-control" name="email_password" onChange={this.onChange} required="" />
                                                            {errors.email_password && <div className=" invaliderror">{errors.email_password}</div>}

                                                        </div>
                                                        <div class="col-md-4 ">
                                                            <label>Rank of Account</label>
                                                            <select class="custom-select" name="current_rank_id" onClick={(e) => this._handleKeyDown(this.state.rankList, e)} onChange={this.onChange} onKeyUp={(e) => this._handleKeyDown(this.state.rankList, e)} >
                                                                <option value={-1} disable selected={!this.state.current_rank_id} >--Select Rank--</option>

                                                                {this.renderRankOption(this.state.rankList)}
                                                            </select>
                                                            {errors.current_rank_id && <div className=" invaliderror">{errors.current_rank_id}</div>}

                                                            <label>Skins Owned</label>
                                                            <input class="form-control" name="skin_owned" onChange={this.onChange} required="" />
                                                            {errors.skin_owned && <div className=" invaliderror">{errors.skin_owned}</div>}

                                                            <label>Last Season Rank</label>
                                                            <select class="custom-select" name="last_season_rank_ID" onClick={(e) => this._handleKeyDown(this.state.rankList, e)} onChange={this.onChange} onKeyUp={(e) => this._handleKeyDown(this.state.rankList, e)} >
                                                                <option value={-1} disable selected={!this.state.last_season_rank_ID} >--Select Rank--</option>

                                                                {this.renderRankOption(this.state.rankList)}
                                                            </select>
                                                            {errors.last_season_rank_ID && <div className=" invaliderror">{errors.last_season_rank_ID}</div>}

                                                        </div>

                                                    </div>

                                                }
                                                {this.state.sell_type == 'comfortSell' &&
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <label>Account Name</label>
                                                            <input class="form-control" name="account_title" onChange={this.onChange} required="" />
                                                            {errors.account_title && <div className=" invaliderror">{errors.account_title}</div>}

                                                            <label>Account E-mail </label>
                                                            <input class="form-control" name="user_email_comfort" onChange={this.onChange} required="" />
                                                            {errors.user_email_comfort && <div className=" invaliderror">{errors.user_email}</div>}

                                                            <label>Currency</label>
                                                            <select class="custom-select" name="currency_comfort" onChange={this.onChange} required="">
                                                                <option value={-1} disable selected={!this.state.currency_comfort} >--Select Currency--</option>

                                                                <option value={"USD"}>USD</option>
                                                                <option value={"EUR"}>EUR</option>
                                                            </select>
                                                            {errors.currency_comfort && <div className=" invaliderror">{errors.currency}</div>}

                                                        </div>
                                                        <div class="col-md-4 ">
                                                            <label>Password</label>
                                                            <input type="password" class="form-control" name="password_comfort" onChange={this.onChange} required="" />
                                                            {errors.password_comfort && <div className=" invaliderror">{errors.password}</div>}

                                                            <label>E-mail Password</label>
                                                            <input type="password" class="form-control" name="email_password" onChange={this.onChange} required="" />
                                                            {errors.email_password && <div className=" invaliderror">{errors.email_password}</div>}

                                                            <label>Last Season Rank</label>
                                                            <select class="custom-select" name="last_season_rank_ID_comfort" onClick={(e) => this._handleKeyDown(this.state.rankList, e)} onChange={this.onChange} onKeyUp={(e) => this._handleKeyDown(this.state.rankList, e)} >
                                                                <option value={-1} disable selected={!this.state.last_season_rank_ID_comfort} >--Select Rank--</option>

                                                                {this.renderRankOption(this.state.rankList)}
                                                            </select>
                                                            {errors.last_season_rank_ID_comfort && <div className=" invaliderror">{errors.last_season_rank_ID}</div>}

                                                        </div>
                                                        <div class="col-md-4 ">
                                                            <label>Server</label>
                                                            <select class="custom-select" name="server_id_comfort" onClick={(e) => this._handleKeyDown(this.state.serverList, e)} onChange={this.onChange} onKeyUp={(e) => this._handleKeyDown(this.state.serverList, e)} >
                                                                <option value={-1} disable selected={!this.state.server_id_comfort} >--Select Server--</option>

                                                                {this.renderServerOption(this.state.serverList)}

                                                            </select>
                                                            {errors.server_id_comfort && <div className=" invaliderror">{errors.server_id}</div>}

                                                            <label>Price</label>
                                                            <input class="form-control" name="price_comfort" onChange={this.onChange} required="" />
                                                            {errors.price_comfort && <div className=" invaliderror">{errors.price}</div>}

                                                        </div>

                                                    </div>

                                                }

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
                                                            <option value={-1} disable selected={!this.state.level_up} >--Select Level Up--</option>

                                                            <option value={"None"}>None</option>
                                                            <option value={"Handmade"}>Handmade</option>
                                                            <option value={"Botted"}>Botted</option>

                                                        </select>
                                                        {errors.level_up && <div className=" invaliderror">{errors.level_up}</div>}

                                                    </div>
                                                    <div class="col-md-4 ">
                                                        <label>Verified email:</label>
                                                        <select class="custom-select" name="verified_email" onChange={this.onChange} required="">
                                                            <option value={-1} disable selected={!this.state.verified_email} >--Select --</option>

                                                            <option value={"No"}>No</option>
                                                            <option value={"Yes"}>Yes</option>
                                                        </select>
                                                        {errors.verified_email && <div className=" invaliderror">{errors.verified_email}</div>}

                                                    </div>
                                                    {/* <div class="col-md-4 ">
                                                        <label>Photos</label>
                                                            <input type="file" class="" />
                                                        <button onClick={() => widgetApi.current.openDialog()}>
                                                            Click me
                                                        </button>
                                                        <Widget ref={widgetApi} publicKey="ae004e3a59fcced0dc17" />
                                                    </div> */}
                                                    <Uploadbtn
                                                        onUploadImage={(e) => this.onUploadImage(e)}
                                                    ></Uploadbtn>
                                                    <div class="col-md-12 ">
                                                        <label>Account description</label>
                                                        <textarea class="form-control" name="description" onChange={this.onChange} required="" />
                                                        {errors.description && <div className=" invaliderror">{errors.description}</div>}

                                                    </div>
                                                </div>

                                                <div class="row">

                                                    <div class="col-md-12">
                                                        <div class="extra-options">
                                                            <div class="list-checkbox">
                                                                <div className="col-sm-3 col-lg-3  col-md-3 col-xl-2   col-4 p-0 ">
                                                                </div>
                                                                {/* <div class="fx-checkbox">
                                                                        <label ><input onClick={(e) => this.onCheckBoxChange("tos")} type="checkbox" checked={this.state.type.tos} name="tos" />Terms of Service</label>
                                                                    </div> */}
                                                                {/* <div class="round">
                                                                        <input type="checkbox"
                                                                            checked={this.state.type.tos}
                                                                        />
                                                                        <label onClick={(e) => this.onCheckBoxChange("tos")} className="labelweight "> </label>
                                                                        <b className="labelweight pl-3 ">{"tos"} </b>
                                                                    </div> */}
                                                                <div class="checkboxClass">
                                                                    <input type="checkbox" checked={this.state.type.tos} />
                                                                    <label onClick={(e) => this.onCheckBoxChange("tos")} ></label>
                                                                    {this.state.type.tos &&
                                                                        <i class="fa fa-check checkIcon" aria-hidden="true" onClick={(e) => this.onCheckBoxChange("tos")}></i>
                                                                    }
                                                                    <b className="pl-3">Terms of Service</b>
                                                                </div>
                                                                <div class="checkboxClass">
                                                                    <input type="checkbox" checked={this.state.type.agreements} />
                                                                    <label onClick={(e) => this.onCheckBoxChange("agreements")} ></label>
                                                                    {this.state.type.agreements &&
                                                                        <i class="fa fa-check checkIcon" aria-hidden="true" onClick={(e) => this.onCheckBoxChange("agreements")}></i>
                                                                    }
                                                                    <b className="pl-3">Seller Agreement</b>
                                                                </div>
                                                                <div class="checkboxClass">
                                                                    <input type="checkbox" checked={this.state.type.consent} />
                                                                    <label onClick={(e) => this.onCheckBoxChange("consent")} ></label>
                                                                    {this.state.type.consent &&
                                                                        <i class="fa fa-check checkIcon" aria-hidden="true" onClick={(e) => this.onCheckBoxChange("consent")}></i>
                                                                    }
                                                                    <b className="pl-3">I did not use this account for atleast 7 days.</b>
                                                                </div>
                                                                <div class="checkboxClass">
                                                                    <input type="checkbox" checked={this.state.type.verification} />
                                                                    <label onClick={(e) => this.onCheckBoxChange("verification")} ></label>
                                                                    {this.state.type.verification &&
                                                                        <i class="fa fa-check checkIcon" aria-hidden="true" onClick={(e) => this.onCheckBoxChange("verification")}></i>
                                                                    }
                                                                    <b className="pl-3">I have removed two step verification from my email.</b>
                                                                </div>

                                                                {/* <div class="fx-checkbox">
                                                                        <label ><input onClick={(e) => this.onCheckBoxChange("consent")} type="checkbox" checked={this.state.type.consent} name="consent" />I did not use this account for atleast 7 days.</label>
                                                                    </div>
                                                                    <div class="fx-checkbox">
                                                                        <label><input onClick={(e) => this.onCheckBoxChange("verification")} type="checkbox" checked={this.state.type.verification} name="verification" />I have removed two step verification from my email.</label>
                                                                    </div> */}
                                                            </div>
                                                            <div class="information">
                                                                <a href="#" target="_self">How it works?</a>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 p-0">
                                                            <div className="bulk-mode">
                                                                <div class="checkboxClass">
                                                                    <input type="checkbox" checked={this.state.type.bulk} />
                                                                    <label onClick={(e) => this.onCheckBoxChange("bulk")} ></label>
                                                                    {this.state.type.bulk &&
                                                                        <i class="fa fa-check checkIcon1" aria-hidden="true" onClick={(e) => this.onCheckBoxChange("bulk")}></i>
                                                                    }
                                                                    <b className="pl-3">Add accounts in bulk mode</b>
                                                                </div>
                                                                {this.state.type.bulk &&
                                                                    <div>
                                                                        <h5 class="heading6">Create additional copies of the account</h5>
                                                                        <p>If you want to upload more than one account with the exact same details (Level, Rank, Champs, Skins, etc.), you can use the bulk import. Submit the additional account credentials in the fields below. (<strng class="purple">*</strng> This option is mostly used by botted account providers)</p>
                                                                        <table>
                                                                            <thead>
                                                                                <tr>
                                                                                    <th className="table-header">No.</th>
                                                                                    <th className="table-header">Username</th>
                                                                                    <th className="table-header">Password</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {this.renderTableRows()}
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sell-bt">
                                                <button onClick={this.onSubmit} class="btn-action">Sell My Account</button>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                            </div>
                            {/* <div class="row justify-content-center">
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
                            </div> */}
                            <PaymentComponent>

                            </PaymentComponent>
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
    postRegularSellAccount,
    postBulkRegularSellAccount,
    postComfortSellAccount,
    postBulkComfortSellAccount,
})
export default connect(mapStatetoProps, mapDispatchToProps)(SellAccount);

