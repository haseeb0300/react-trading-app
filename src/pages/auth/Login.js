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
import { loginUser,loginUserFb } from '../../store/actions/authAction'
import { connect } from 'react-redux';

import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {},
            serverError: {},
            isLoading: false,
            fb_token:"",
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
        this.setState({
            fb_token: data.tokenDetail.userID,
        })
        this.props.loginUserFb({
            "token": this.state.fb_token,
        }).then((res) => {
            this.setState({ isLoading: false })
            console.log(res)
            if (res.status) {
                this.props.history.push('/userdashboard')
                new Noty({
                    text: "Succsessfully Login",

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
    onSubmit = (e) => {
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
    render() {
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
                <section class="banner-section section-background-login-image" >
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-12 text-center">
                                <Flip top delay={700}>
                                    <div>

                                        <h1 class="wow flipInX mt-3" data-wow-delay="0.6s">LOGIN</h1>
                                    </div>
                                </Flip>
                                <Slide bottom delay={1200}>
                                    <div>

                                        <p class="wow fadeInUp" data-wow-delay="1s">Create new account on our platform. It will allow you to use all prepared features by LoL Trading.
                           <br></br><strong>If you lost access to your account go to forgot password section & recover your account.</strong>
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
                                                {errors.email && <div className=" invaliderror">{errors.email}</div>}
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" class="form-control" placeholder="*******" name="password" onChange={this.onChange} required="" />
                                                {errors.password && <div className=" invaliderror">{errors.password}</div>}
                                            </div>
                                            <button type="submit" onClick={this.onSubmit} class="btn btn-primary btn-block">Login</button>
                                            <div class="row align-items-center mt-3">
                                                <div class="col-md-7">
                                                    {/* <button type="button" class="btn btn-primary btn-block btn-fb"><i class="fa fa-facebook-square"></i> <span>Login with Facebook</span></button> */}
                                                    <FacebookProvider appId="3258485927608008">
                                                        <LoginButton
                                                            className="btn btn-primary btn-fb "
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
                                                        <label for="Remember">Remember Me</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-8 text-center">
                                                    <p>Don't have an account yet?<Link to="/signup"><a  >Click here</a> </Link>to create one enjoy our Loyalty Program!</p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>                    {this.renderServerError()}

                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-7 px-md-4">
                                    <Slide bottom delay={50}>
                                        <div>
                                            <h4 class="text-center wow fadeInDown" data-wow-delay="0.6s">PAYMENT PROVIDERS:</h4>
                                        </div>
                                    </Slide>
                                    <ul>
                                    <Fade right delay ={100}> 

                                        <li class="wow fadeInRight" data-wow-delay="0.6s">
                                            <img src={paypal_img} alt="paypal" />
                                        </li>
                                        </Fade>
                                        <Fade right delay ={150}> 

                                        <li class="wow fadeInRight" data-wow-delay="0.8s">
                                            <img src={master_img} alt="master" />
                                        </li>
                                        </Fade>
                                        <Fade right delay ={200}> 

                                        <li class="wow fadeInRight" data-wow-delay="1s">
                                            <img src={visa_img} alt="visa" />
                                        </li>
                                        </Fade>
                                        <Fade right delay ={250}> 

                                        <li class="wow fadeInRight" data-wow-delay="1.3s">
                                            <img src={skrill_img} alt="skrill" />
                                        </li>
                                        </Fade>
                                        <Fade right delay ={300}> 

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

Login.propTypes = {

};

const mapStatetoProps = ({ auth }) => ({
    user: auth.user
})
const mapDispatchToProps = ({
    loginUser,
    loginUserFb
})

export default connect(mapStatetoProps, mapDispatchToProps)(Login);

