import React from "react";
import master_img from '../../assets/images/master.png'
import visa_img from '../../assets/images/visa.png'
import paypal_img from '../../assets/images/paypal.png'
import skrill_img from '../../assets/images/skrill.png'
import stripe_img from '../../assets/images/stripe.png'
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
function PaymentComponent(props) {
    return (

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

    );
}
PaymentComponent.propTypes = {};

export default PaymentComponent;