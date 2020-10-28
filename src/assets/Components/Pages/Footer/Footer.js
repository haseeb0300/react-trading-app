import React, { useState } from "react";

import PropTypes from "prop-types";
import master_img from "../../../images/master.png"
import visa_img from "../../../images/visa.png"
import paypal_img from "../../../images/paypal.png"
import Fade from 'react-reveal/Fade';


function Footer(props) {
    //const { t, i18n } = this.props





    return (
        <div class="footer">
        <div class="footer-top">
            <div class="container">

                <div class="row">
                    <div class="col-sm-6 col-md-3 wow fadeInUp" data-wow-delay="0.4s">
                    <Fade bottom delay={100}>

                        <h5 class="mt-0">Information</h5>
                        <ul>
                            <li><span class="icon-location"></span> Enter your street, Block City. XYZ,China</li>
                            <li><a href="tel:+01-111-222-333"><span class="icon-call"></span> +01 111 222  333</a></li>
                            <li><a href="mailto:info@loltrading.com"><span class="icon-envelope"></span> info@loltrading.com</a></li>
                        </ul>
                        </Fade>
                    </div>
                    <div class="col-sm-6 col-md-3 wow fadeInUp" data-wow-delay="0.6s">
                    <Fade bottom delay={200}>

                        <h5>Services</h5>
                        <ul>
                            <li><a href="javascript:void(0)"><span class="icon-double-angle-right"></span> Live Chat</a></li>
                            <li><a href="javascript:void(0)"><span class="icon-double-angle-right"></span> Years on Market</a></li>
                            <li><a href="javascript:void(0)"><span class="icon-double-angle-right"></span> Payment Methods</a></li>
                            <li><a href="javascript:void(0)"><span class="icon-double-angle-right"></span> 24/7 Active help sport</a></li>
                        </ul>
                        </Fade>
                    </div>
                    <div class="col-sm-6 col-md-3 wow fadeInUp" data-wow-delay="0.8s">
                    <Fade bottom delay={300}>

                        <h5>Quick Link</h5>
                        <ul>
                            <li><a href="javascript:void(0)"><span class="icon-double-angle-right"></span> Terms & Conditions</a></li>
                            <li><a href="javascript:void(0)"><span class="icon-double-angle-right"></span> Contact</a></li>
                            <li><a href="javascript:void(0)"><span class="icon-double-angle-right"></span> FAQ</a></li>
                            <li><a href="javascript:void(0)"><span class="icon-double-angle-right"></span> Privacy Policy</a></li>
                        </ul>
                        </Fade>
                    </div>
                    <div class="col-sm-6 col-md-3 wow fadeInUp" data-wow-delay="1s">
                    <Fade bottom delay={400}>

                        <h5>Payment Methods</h5>
                        <p class="mb-4">Your payment details will be
                        secure and confidential.
            </p>
                        <img class="mr-4" src={master_img} alt="master" />
                        <img src={visa_img} alt="visa" />
                        <img class="mt-3" src={paypal_img} alt="paypal" />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-12 text-center">
                        <p class="d-inline-block mb-0 mr-2">Copyright 2020 © <span class="text-primary">Lol Trading</span>  |  All Rights Reserved <span class="text-primary pl-md-5 ml-md-3">FOLLOW US</span></p>
                        <ul class="social-icon d-inline-block">
                            <li>
                                <a href="javascript:void(0)"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><i class="fa fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><i class="fa fa-facebook"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

        );
}
Footer.propTypes = {

};


const mapStateToProps = state => ({

});

const mapDispatchToProps = ({


})
export default (Footer);

