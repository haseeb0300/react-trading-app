import React, { Component } from 'react';
import master_img from '../../assets/images/master.png'
import visa_img from '../../assets/images/visa.png'
import paypal_img from '../../assets/images/paypal.png'
import skrill_img from '../../assets/images/skrill.png'
import stripe_img from '../../assets/images/stripe.png'
import { Link, } from 'react-router-dom';
import WOW from 'wowjs';
import Noty from 'noty';
import "../../../node_modules/noty/lib/noty.css";

import "../../../node_modules/noty/lib/themes/mint.css";
import { FacebookProvider, LoginButton } from 'react-facebook';
import { loginUser } from '../../store/actions/authAction'
import { connect } from 'react-redux';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            serverError: {},
            isLoading: false,
        };
    }
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleResponse = (data) => {
        console.log(data);
    }
    handleError = (error) => {
        this.setState({ error });
    }
    onSubmit = (e) => {
        this.setState({ isLoading: true })
        e.preventDefault()
        this.props.loginUser({
            "email": this.state.email,
            "password": this.state.password
        }).then((res) => {
            this.setState({ isLoading: false })
            console.log(res)
            if (res.status) {
                this.props.history.push('/userdashboard')
                new Noty({
                    text: "Succsessfully Login",
                    layout: "topRight",
                    theme: "bootstrap-v4",
                    type: "success",

                    timeout: 1000
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
    render() {
        const { isLoading } = this.state;
        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }
        return (
            <div class="wrapper">
                {/* <!-- Banner section --> */}
                <section class="banner-section section-background-login-image" >
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-12 text-center">
                                <h1 class="wow flipInX mt-3" data-wow-delay="0.6s">LOGIN</h1>
                                <p class="wow fadeInUp" data-wow-delay="1s">Create new account on our platform. It will allow you to use all prepared features by LoL Trading.
                           <br></br><strong>If you lost access to your account go to forgot password section & recover your account.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Main --> */}
                <main>
                    {/* <!-- Our Services --> */}
                    <section class="user-section wow fadeInUp" data-wow-delay="1s">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-12">
                                    <div class="user-account">
                                        <h2 class="text-center wow pulse" data-wow-delay="0.2s">Account Login</h2>
                                        <form>
                                            <div class="form-group mb-4">
                                                <label>Enter your Email Address</label>
                                                <input type="email" class="form-control" placeholder="Joel@example.com" name="email" onChange={this.onChange} required="" />
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" class="form-control" placeholder="Joel@example.com" name="password" onChange={this.onChange} required="" />
                                            </div>
                                            <button type="submit" onClick={this.onSubmit} class="btn btn-primary btn-block">Login</button>
                                            <div class="row align-items-center mt-3">
                                                <div class="col-md-7">
                                                    {/* <button type="button" class="btn btn-primary btn-block btn-fb"><i class="fa fa-facebook-square"></i> <span>Login with Facebook</span></button> */}
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
                                                </div>
                                                <div class="col-md-5 text-center text-md-right mt-3 mt-md-0">
                                                    <Link to="/passwordrecovery">
                                                        <a class="forgot-pw"  >Forgot Your Password? <i class="fa fa-arrow-right ml-2"></i></a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div class="row mt-md-4 pt-3">
                                                <div class="col-md-4 text-center text-md-left">
                                                    <div class="form-group custom-check">
                                                        <input type="checkbox" id="Remember" />
                                                        <label for="Remember">Remember me</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-8 text-center">
                                                    <p>Don't have an account yet?<Link to="/signup"><a  >Click here</a> </Link>to create one enjoy our Loyalty Program!</p>
                                                </div>
                                            </div>
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

Login.propTypes = {

};

const mapStatetoProps = ({ auth }) => ({
    user: auth.user
})
const mapDispatchToProps = ({
    loginUser
})

export default connect(mapStatetoProps, mapDispatchToProps)(Login);

