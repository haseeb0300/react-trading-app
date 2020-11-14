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
import { registerUser, registerUserFb } from '../../store/actions/authAction'
import Noty from 'noty';
import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/mint.css";
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            user_name: "",
            country: "",
            phone_no: "",
            fb_token: "",
            confirm_password: "",
            countryList: countryList,
            serverError: {},
            isLoading: false,
            errors: {},
        };
    }
    handleResponse = (data) => {
        console.log(data);
        this.setState({
            fb_token: data.tokenDetail.userID,
            email: data.profile.email,
            user_name: data.profile.name,
        })
        this.props.registerUserFb({
            "token": this.state.fb_token,
            "email": this.state.email,
            "user_name": this.state.user_name,
        }).then((res) => {
            this.setState({ isLoading: false })
            console.log(res)
            if (res.status) {
                this.props.history.push('/userdashboard')
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

                    type: "error",
                    timeout: 2000
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
    handleError = (error) => {
        this.setState({ error });
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
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
                this.props.history.push('/userdashboard')
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

                    type: "error",
                    timeout: 2000
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
        const { errors } = this.state
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
                                <Flip top delay={700}>
                                    <div>
                                        <h1 class="wow flipInX mt-3" data-wow-delay="0.6s">REGISTER</h1>
                                    </div>
                                </Flip>
                                <Slide bottom delay={1200}>
                                    <div>
                                        <p class="wow fadeInUp" data-wow-delay="1s">Create new account on our platform. It will allow you to use all prepared features by LoL Trading.
                           <br></br><strong>If you lost access to your account go to forgot password section & recover your account</strong>
                                        </p>
                                    </div>
                                </Slide>
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
                                                <input type="text" class="form-control" placeholder="Enter User Name" name="user_name" onChange={this.onChange} required="" />
                                                {errors.user_name && <div className=" invaliderror">{errors.user_name}</div>}
                                            </div>
                                            <div class="form-group mb-md-4">
                                                <label>Your email</label>
                                                <input type="email" class="form-control" placeholder="Joel@example.com" name="email" onChange={this.onChange} required="" />
                                                {errors.email && <div className=" invaliderror">{errors.email}</div>}
                                            </div>
                                            <div class="form-group mb-md-4">
                                                <label>PASSWORD</label>
                                                <input type="password" class="form-control" placeholder="Enter Password" name="password" onChange={this.onChange} required="" />
                                                {errors.password && <div className=" invaliderror">{errors.password}</div>}
                                            </div>
                                            <div class="form-group mb-md-4">
                                                <label>Re-enter your PASSWORD</label>
                                                <input type="password" class="form-control" placeholder="Re-Enter Your Password" name="confirm_password" onChange={this.onChange} required="" />
                                                {errors.password2 && <div className=" invaliderror">{errors.password2}</div>}
                                            </div>
                                            <div class="form-group mb-md-4">
                                                <label>COUNTRY</label>
                                                <select class="form-control" name="country" onClick={this._handleKeyDownCountry} onChange={this.onChange} onKeyUp={this._handleKeyDownCountry}>
                                                    <option value={-1} disable selected={!this.state.country} >Choose your VPN location</option>
                                                    {this.renderOption()}
                                                </select>
                                                {errors.country && <div className=" invaliderror">{errors.country}</div>}
                                               
                                            </div>
                                            <div class="form-group">
                                                <label>PHONE number</label>
                                                <input type="text" class="form-control" placeholder="1234456789" name="phone_no" onChange={this.onChange} required="" />
                                                {errors.phone_no && <div className=" invaliderror">{errors.phone_no}</div>}
                                            </div>
                                            <button type="submit" class="btn btn-primary btn-block mb-3 mb-md-4 mt-4" onClick={(e)=>this.onSubmit(e)}>Signup</button>
                                            {/* <button type="button" class="btn btn-primary btn-fb m-auto"><i class="fa fa-facebook-square"></i> Signup with Facebook</button> */}
                                            <FacebookProvider appId="3258485927608008">
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
                                {this.renderServerError()}
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-7 px-md-4">
                                    <Slide bottom delay={50}>
                                        <div>
                                            <h4 class="text-center wow fadeInDown" data-wow-delay="0.6s">PAYMENT PROVIDERS:</h4>
                                        </div>
                                    </Slide>
                                    <ul>
                                        <Fade right delay={100}>
                                            <li class="wow fadeInRight" data-wow-delay="0.6s">
                                                <img src={paypal_img} alt="paypal" />
                                            </li>
                                        </Fade>
                                        <Fade right delay={150}>
                                            <li class="wow fadeInRight" data-wow-delay="0.8s">
                                                <img src={master_img} alt="master" />
                                            </li>
                                        </Fade>
                                        <Fade right delay={200}>
                                            <li class="wow fadeInRight" data-wow-delay="1s">
                                                <img src={visa_img} alt="visa" />
                                            </li>
                                        </Fade>
                                        <Fade right delay={250}>
                                            <li class="wow fadeInRight" data-wow-delay="1.3s">
                                                <img src={skrill_img} alt="skrill" />
                                            </li>
                                        </Fade>
                                        <Fade right delay={300}>
                                            <li class="wow fadeInRight" data-wow-delay="1.6s">
                                                <img src={stripe_img} alt="stripe" />
                                            </li>
                                        </Fade>
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
    registerUser,
    registerUserFb
})

export default connect(mapStatetoProps, mapDispatchToProps)(Signup);

