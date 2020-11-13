import React, { Component } from 'react';

import master_img from '../../assets/images/master.png'
import visa_img from '../../assets/images/visa.png'
import paypal_img from '../../assets/images/paypal.png'
import skrill_img from '../../assets/images/skrill.png'
import stripe_img from '../../assets/images/stripe.png'


import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';


import { Link, } from 'react-router-dom';



import { temPassword } from '../../store/actions/authAction'
import { connect } from 'react-redux';

import WOW from 'wowjs';


class PasswordRecovery extends Component {
   constructor(props) {
      super(props);
      this.state = {
         serverError: {},
         isLoading: false,
         email: '',
      };
   }




   componentDidMount() {

      // this.props.i18n.changeLanguage("de");

      new WOW.WOW({
         live: false
      }).init();


   }
   onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
   }
   onSubmit = (e) => {
      e.preventDefault()
      this.props.temPassword({

         "email": this.state.email,
      }).then((res) => {
         console.log(res)
         this.props.history.push('/login');
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
            <section class="banner-section section-background-password-image"  >
               <div class="container">
                  <div class="row align-items-center">
                     <div class="col-md-12 text-center">
                        <Flip top delay={700}>
                           <div>
                              <h1 class="wow flipInX mt-3" data-wow-delay="0.6s">Password Recovery</h1>
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
            <main>
               <section class="user-section wow fadeInUp" data-wow-delay="1s">
                  <div class="container">
                     <div class="row justify-content-center">
                        <div class="col-md-12">
                           <div class="user-account">
                              <h2 class="text-center wow pulse" data-wow-delay="0.2s">Recover Your Password</h2>
                              <form>
                                 <div class="form-group">
                                    <label>Enter your Email Address</label>
                                    <input type="email" class="form-control" placeholder="Joel@example.com" name="email" onChange={this.onChange} required="" />
                                 </div>
                                 <Link to="/confrimpassword">
                                    <button type="submit" class="btn btn-primary btn-block mt-1 mb-4 mb-md-5" onClick={this.onSubmit}>Reset Password</button>
                                 </Link>
                                 <p class="text-center mb-2 mb-md-4 pb-2">Already have an account? Click to <Link to="/login"><a  > Sign In</a></Link> </p>
                                 <p class="text-center mb-0">Don't have an account yet? <Link to="/login"> <a  >Click here</a> </Link> to create one <br class="d-none d-md-block"></br>
                                    enjoy our Loyalty Program!
                                 </p>
                              </form>
                           </div>
                        </div>
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

PasswordRecovery.propTypes = {

};

const mapStatetoProps = ({ auth }) => ({
   user: auth.user
})
const mapDispatchToProps = ({
   temPassword
})

export default connect(mapStatetoProps, mapDispatchToProps)(PasswordRecovery);

