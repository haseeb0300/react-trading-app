import React from "react";
import master_img from '../../assets/images/master.png'
import visa_img from '../../assets/images/visa.png'
import paypal_img from '../../assets/images/paypal.png'
import skrill_img from '../../assets/images/skrill.png'
import stripe_img from '../../assets/images/stripe.png'

function PaymentComponent(props) {
    return (

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
    );
}
PaymentComponent.propTypes = {};

export default PaymentComponent;