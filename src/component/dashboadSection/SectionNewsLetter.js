import React, { useState } from "react";

import PropTypes from "prop-types";
import logo from "../../assets/images/logo.png"

import { Link, withRouter } from 'react-router-dom';

import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

function SectionNewsLetter(props) {
    //const { t, i18n } = this.props





    return (
      <section class="newsletter-section">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-md-12">
               <form class="form-inline justify-content-center">
               <Fade left delay= {10}>

                  <h5 class="text-center text-md-left mb-3 mb-xl-0 wow fadeInLeft" data-wow-delay="0.4s">Subscribe TO our newsletter</h5>
                  </Fade>
                  <div class="input-group ml-md-3 wow fadeInRight" data-wow-delay="0.4s">

                     <input type="text" class="form-control" placeholder="Enter your email address" />
                     <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                           Subscribe
                      </button>
                     </div>
                     
                  </div>
               </form>
            </div>
         </div>
      </div>
   </section>

        );
}
SectionNewsLetter.propTypes = {

};


const mapStateToProps = state => ({

});

const mapDispatchToProps = ({


})
export default (SectionNewsLetter);

