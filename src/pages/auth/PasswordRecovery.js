import React, { Component } from 'react';

import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/cart.svg'
import sell from '../../assets/images/sell.svg'
import master_img from '../../assets/images/master.png'
import visa_img from '../../assets/images/visa.png'
import paypal_img from '../../assets/images/paypal.png'
import skrill_img from '../../assets/images/skrill.png'
import stripe_img from '../../assets/images/stripe.png'
import backgroundimg from '../../assets/images/lol-accounts.jpg'
import { Link, withRouter } from 'react-router-dom';
import WOW from 'wowjs';
import Header from '../../assets/Components/Pages/Header/Header'
import Footer from '../../assets/Components/Pages/Footer/Footer'


class PasswordRecovery extends Component {
   constructor(props) {
      super(props);
      this.state = {
         serverError: {},
         isLoading: false,
      };
   }




   componentDidMount() {

      // this.props.i18n.changeLanguage("de");

      new WOW.WOW({
         live: false
      }).init();


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
            {/* <!-- Header --> */}
            <Header></Header>
            {/* <!-- Banner section --> */}
            <section class="banner-section"
            // style="background-image: url('assets/images/password.png');"
            >
               <div class="container">
                  <div class="row align-items-center">
                     <div class="col-md-12 text-center">
                        <h1 class="wow flipInX mt-3" data-wow-delay="0.6s">Password Recovery</h1>
                        <p class="wow fadeInUp" data-wow-delay="1s">Create new account on our platform. It will allow you to use all prepared features by LoL Trading.
                           <br></br><strong>If you lost access to your account go to forgot password section & recover your account</strong>
                        </p>
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
                                    <input type="email" class="form-control" placeholder="Joel@example.com" />
                                 </div>
                                 <Link to="/confrimpassword">

                                 <button type="submit" class="btn btn-primary btn-block mt-1 mb-4 mb-md-5">Reset Password</button>
                                 </Link>
                                 <p class="text-center mb-2 mb-md-4 pb-2">Already have an account? Click to <Link to="/login"><a href=""> Sign In</a></Link> </p>
                                 <p class="text-center mb-0">Don't have an account yet? <Link to="/login"> <a href="">Click here</a> </Link> to create one <br class="d-none d-md-block"></br>
                                    enjoy our Loyalty Program!
                                 </p>
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
            {/* <!-- Footer --> */}
            <Footer></Footer>
         </div>




      )
   }

}

PasswordRecovery.propTypes = {

};


export default (PasswordRecovery);

