import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../../images/logo.png"
import { Link, withRouter } from 'react-router-dom';

function SectionBanner(props) {
    //const { t, i18n } = this.props
    return (
        <section class="banner-section">
        <div class="container">
           <div class="row align-items-center">
              <div class="col-md-12 text-center">
                 <h1 class="wow flipInX mt-3" data-wow-delay="0.6s">START YOUR <br></br><span>LEGEND</span></h1>
                 <p class="wow fadeInUp" data-wow-delay="1s">LoL Trading is a professional marketplace for 
                    <br></br><strong>Sellers of League of Legends accounts.</strong>
                 </p>
                 <a href="javascript:void(0)" class="btn btn-secondary wow fadeInUp 
                    mb-md-4" data-wow-delay="1.2s">VIEW ACCOUNTS</a>
                 <p class="wow fadeInDown mt-3 mt-md-0" data-wow-delay="1.2s">  <a href="#account"><span class="icon-angle-down"></span></a></p>
              </div>
           </div>
        </div>
     </section>
    
    );
}
SectionBanner.propTypes = {};
const mapStateToProps = state => ({});
const mapDispatchToProps = ({})
export default (SectionBanner);