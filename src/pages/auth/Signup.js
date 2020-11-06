import React, { Component } from 'react';


import master_img from '../../assets/images/master.png'
import visa_img from '../../assets/images/visa.png'
import paypal_img from '../../assets/images/paypal.png'

import skrill_img from '../../assets/images/skrill.png'
import stripe_img from '../../assets/images/stripe.png'
import { Link, } from 'react-router-dom';
import WOW from 'wowjs';
import countryList from '../../assets/country.json'
import { FacebookProvider, LoginButton } from 'react-facebook';
import { connect } from 'react-redux';
import { registerUser } from '../../store/actions/authAction'
import Noty from 'noty';
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/mint.css";
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            user_name: "",
            country: "",
            phone_no: "",
            token: "",
            confirm_password: "",
            countryList: countryList,
            serverError: {},
            isLoading: false,
            errors: {},
            serverError: {},
        };
    }
    handleResponse = (data) => {
        console.log(data);
        this.setState({
            token: data.tokenDetail.accessToken,
            email: data.profile.email,
            user_name: data.profile.name,
        })
        this.props.registerUser({
            "token": this.state.token,
            "email": this.state.email,
            "password": '123456',
            "user_name": this.state.user_name,
            "country": 'Pakistan',
            "phone_no": '03022631109',
            "password2": '123456',
        }).then((res) => {
            console.log(res)
        })
    }
    handleError = (error) => {
        this.setState({ error });
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        this.setState({ isLoading: true })
        e.preventDefault()
        this.props.registerUser({
            "email": this.state.email,
            "password": this.state.password,
            "user_name": this.state.user_name,
            "country": this.state.country,
            "phone_no": this.state.phone_no,
            "password2": this.state.confirm_password,
        }).then((res) => {
            this.setState({ isLoading: false })
            console.log(res)
            if (res.status) {
                this.props.history.push('/login')
                new Noty({
                    text: "Succsessfully Register",
                    // layout: "topRight",
                    // theme: "bootstrap-v4",
                    type: "success",
                    timeout: 2000
                }).show()
                    .then(() => { }
                    )
            } else {
                new Noty({
                    text: "Something went wrong",
                    layout: "topRight",
                    theme: "bootstrap-v4",
                    type: "error",
                    timeout: 1000
                }).show();
            }
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
    componentDidMount() {
        // this.props.i18n.changeLanguage("de");
        new WOW.WOW({
            live: false
        }).init();
        console.log('will', this.state.countryList)
    }
    _handleKeyDownCountry = (e) => {
        console.log("here", [e.target.value])
        if (e.target.value == 0) {
            return
        }
        if (this.state.countryList[e.target.value]) {
            console.log(this.state.countryList[e.target.value])
            this.setState({ country: this.state.countryList[e.target.value] })
        }
    }
    renderOption = () => {
        return countryList.map((item, i) =>
            <option value={item.name}>{item.name}</option>
        )
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
                <section class="banner-section section-background-signup-image" >
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-12 text-center">
                                <h1 class="wow flipInX mt-3" data-wow-delay="0.6s">REGISTER</h1>
                                <p class="wow fadeInUp" data-wow-delay="1s">Create new account on our platform. It will allow you to use all prepared features by LoL Trading.
                           <br></br><strong>If you lost access to your account go to forgot password section & recover your account</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Main --> */}
                <main>
                    {/* <!-- Our Services --> */}
                    <section class="user-section wow fadeInUp " data-wow-delay="1s">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-12">
                                    <div class="user-account">
                                        <h2 class="text-center wow pulse" data-wow-delay="0.2s">Create New Account</h2>
                                        <form>
                                            <div class="form-group mb-md-4">
                                                <label>Username</label>
                                                <input type="text" class="form-control" placeholder="" name="user_name" onChange={this.onChange} required="" />
                                            </div>
                                            <div class="form-group mb-md-4">
                                                <label>Your email</label>
                                                <input type="email" class="form-control" placeholder="Joel@example.com" name="email" onChange={this.onChange} required="" />
                                            </div>
                                            <div class="form-group mb-md-4">
                                                <label>PASSWORD</label>
                                                <input type="password" class="form-control" placeholder="" name="password" onChange={this.onChange} required="" />
                                            </div>
                                            <div class="form-group mb-md-4">
                                                <label>Re-enter your PASSWORD</label>
                                                <input type="password" class="form-control" placeholder="" name="confirm_password" onChange={this.onChange} required="" />
                                            </div>
                                            <div class="form-group mb-md-4">
                                                <label>COUNTRY</label>
                                                <select class="custom-select" name="country" onClick={this._handleKeyDownCountry} onChange={this.onChange} onKeyUp={this._handleKeyDownCountry}>
                                                    {this.renderOption()}
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>PHONE number</label>
                                                <input type="text" class="form-control" placeholder="1234456789" name="phone_no" onChange={this.onChange} required="" />
                                            </div>
                                            <button type="submit" class="btn btn-primary btn-block mb-3 mb-md-4 mt-4" onClick={this.onSubmit}>Signup</button>
                                            {/* <button type="button" class="btn btn-primary btn-fb m-auto"><i class="fa fa-facebook-square"></i> Signup with Facebook</button> */}
                                            <FacebookProvider appId="377592783588831">
                                                <LoginButton
                                                    className="btn btn-primary btn-fb m-auto"
                                                    scope="email"
                                                    onCompleted={this.handleResponse}
                                                    onError={this.handleError}
                                                >
                                                    <i class="fa fa-facebook-square"></i>
                                                    <span>Login with Facebook</span>
                                                </LoginButton>
                                            </FacebookProvider>
                                            <p class="text-center mt-4 mt-md-5 mb-0">Already have an account? Click to<Link to="/login"><a  >Sign In</a> </Link></p>
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
            </div>
        )
    }

}

Signup.propTypes = {

};

const mapStatetoProps = ({ auth }) => ({
    user: auth.user
})
const mapDispatchToProps = ({
    registerUser
})

export default connect(mapStatetoProps, mapDispatchToProps)(Signup);

