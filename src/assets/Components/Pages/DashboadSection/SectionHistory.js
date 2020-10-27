import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../../images/logo.png"
import { Link, withRouter } from 'react-router-dom';
function SectionHistory(props) {
    //const { t, i18n } = this.props
    return (
        <section class="history-section">
        <div class="container">
           <div class="row justify-content-center">
              <div class="col-md-8 offset-md-4 col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
                 <h3 class="ml-2 wow fadeInDown" data-wow-delay="0.4s">LOL Trading History</h3>
                 <ul>
                    <li class="wow fadeInRight" data-wow-delay="0.6s">
                       <h5>725</h5>
                       <p>Account Available</p>
                    </li>
                    <li class="wow fadeInRight" data-wow-delay="0.8s">
                       <h5>450+ </h5>
                       <p>Account Created</p>
                    </li>
                    <li class="wow fadeInRight" data-wow-delay="1s">
                       <h5>77196</h5>
                       <p>Order Completed</p>
                    </li>
                    <li class="wow fadeInRight" data-wow-delay="1.2s">
                       <h5>3100+</h5>
                       <p>Positive Reviews</p>
                    </li>
                 </ul>
              </div>
           </div>
        </div>
     </section>
        );
}
SectionHistory.propTypes = {
};
const mapStateToProps = state => ({
});
const mapDispatchToProps = ({
})
export default (SectionHistory);
