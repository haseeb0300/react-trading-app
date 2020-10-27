import React, { useState } from "react";

import img_test_1 from '../../../images/testi-1.png'
import img_test_2 from '../../../images/testi-2.png'
import img_test_3 from '../../../images/testi-3.png'


function TestiMonial(props) {
    //const { t, i18n } = this.props





    return (
        <section class="testimonial-section wow fadeInUp" data-wow-delay="0.4s">
        <div class="container">
           <div class="row">
              <div class="col-md-12">
                 <h2 class="d-md-none mt-4 pt-2">Our Reviews</h2>
                 <div id="testimonial-slider" class="owl-carousel">
                    <div class="testimonial">
                       <div class="pic">
                          <img src={img_test_1}/>
                       </div>
                       <span class="fa fa-quote-left d-block"></span>
                       <p class="description">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                       </p>
                       <h3 class="title">John Dow</h3>
                       <span class="post">September12, 2020</span>
                    </div>
                    <div class="testimonial">
                       <div class="pic">
                          <img src={img_test_2}/>
                       </div>
                       <span class="fa fa-quote-left d-block"></span>
                       <p class="description">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                       </p>
                       <h3 class="title">John Dow</h3>
                       <span class="post">September12, 2020</span>
                    </div>
                    <div class="testimonial">
                       <div class="pic">
                          <img src={img_test_3}/>
                       </div>
                       <span class="fa fa-quote-left d-block"></span>
                       <p class="description">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                       </p>
                       <h3 class="title">John Dow</h3>
                       <span class="post">September12, 2020</span>
                    </div>
                    <div class="testimonial">
                       <div class="pic">
                          <img src={img_test_1}/>
                       </div>
                       <span class="fa fa-quote-left d-block"></span>
                       <p class="description">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                       </p>
                       <h3 class="title">John Dow</h3>
                       <span class="post">September12, 2020</span>
                    </div>
                    <div class="testimonial">
                       <div class="pic">
                          <img src={img_test_2}/>
                       </div>
                       <span class="fa fa-quote-left d-block"></span>
                       <p class="description">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                       </p>
                       <h3 class="title">John Dow</h3>
                       <span class="post">September12, 2020</span>
                    </div>
                    <div class="testimonial">
                       <div class="pic">
                          <img src={img_test_3}/>
                       </div>
                       <span class="fa fa-quote-left d-block"></span>
                       <p class="description">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                       </p>
                       <h3 class="title">John Dow</h3>
                       <span class="post">September12, 2020</span>
                    </div>
                    <div class="testimonial">
                       <div class="pic">
                          <img src={img_test_1}/>
                       </div>
                       <span class="fa fa-quote-left d-block"></span>
                       <p class="description">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                       </p>
                       <h3 class="title">John Dow</h3>
                       <span class="post">September12, 2020</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>
    );
}
TestiMonial.propTypes = {

};


const mapStateToProps = state => ({

});

const mapDispatchToProps = ({


})
export default (TestiMonial);

