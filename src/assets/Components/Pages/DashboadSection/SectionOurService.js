import React, { useState } from "react";



function SectionOurService(props) {
    //const { t, i18n } = this.props





    return (
        <section class="our-services" id="our-services">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-12">
                           <h2 class="text-center wow pulse" data-wow-delay="0.2s">Our Services</h2>
                        </div>
                     </div>
                     <div class="row text-center mt-4">
                        <div class="col-sm-6 col-md-3">
                           <div class="service-block wow fadeInRight px-lg-3 " data-wow-delay="0.6s">
                              <div class="service-block-icon">
                                 <span class="d-block">06+</span>
                                 <i class="icon-calendar"></i>
                              </div>
                              <h3>Years  on Market</h3>
                              <p>Lorem ipsum dolor amet ipisicing eliteiuim sete eiusmod tempor incididunt ut labore .</p>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                           <div class="service-block wow fadeInRight px-lg-3" data-wow-delay="1s">
                              <div class="service-block-icon">
                                 <span class="d-block">450+</span>
                                 <i class="icon-account"></i>
                              </div>
                              <h3>Game Account</h3>
                              <p>Lorem ipsum dolor amet ipisicing eliteiuim sete eiusmod tempor incididunt ut labore .</p>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                           <div class="service-block wow fadeInRight px-lg-3" data-wow-delay="1.4s">
                              <div class="service-block-icon">
                                 <span class="d-block">120+</span>
                                 <i class="icon-credit-card"></i>
                              </div>
                              <h3>Payment Methods</h3>
                              <p>Lorem ipsum dolor amet ipisicing eliteiuim sete eiusmod tempor incididunt ut labore .</p>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                           <div class="service-block wow fadeInRight px-lg-3" data-wow-delay="1.8s">
                              <div class="service-block-icon">
                                 <span class="d-block">24/7</span>
                                 <i class="icon-chat"></i>
                              </div>
                              <h3>Live Chat</h3>
                              <p>Lorem ipsum dolor amet ipisicing eliteiuim sete eiusmod tempor incididunt ut labore .</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
              
        );
}
SectionOurService.propTypes = {

};


const mapStateToProps = state => ({

});

const mapDispatchToProps = ({


})
export default (SectionOurService);

