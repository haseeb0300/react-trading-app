import React,{ useRef ,useState} from "react";

import img_test_1 from '../../assets/images/testi-1.png'
import img_test_2 from '../../assets/images/testi-2.png'
import img_test_3 from '../../assets/images/testi-3.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {
   isMobileOnly
} from "react-device-detect";
function TestiMonial(props) {
   //const { t, i18n } = this.props
   const carosel = useRef(null);
   const [ current , setCurrent]=   useState(0)
  const onChange =(event)=> {
      let canvas = React.findDOMNode( carosel)
                     .querySelector('canvas');
       
    }
const    onSlideChange = (event)=>{
       console.log(event)
       setCurrent(event.relatedTarget._current)
    }
   return (
      <section class="testimonial-section wow fadeInUp" >
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <h2 class="d-md-none mt-4 pt-2">Our Reviews</h2>
                  {/* <div  class="owl-carousel"> */}
                  {isMobileOnly?(   
                  <OwlCarousel
                  className="owl-theme"
                  loop
                  center={true} 
                  items={1}
                  merge        
                  dotData= {true} 
               >
                  
                  {/* <div class={"testimonial"  >
                     <div class="pic">
                        <img src={img_test_1} alt="image" />
                     </div>
                     <span class="fa fa-quote-left d-block"></span>
                     <p class="description">
                        1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                    </p>
                     <h3 class="title">John Dow</h3>
                     <span class="post">September12, 2020</span>
                  </div> */}
                  <div class="testimonial">
                  <div class="pic">
                     <img src={img_test_1} alt="image" />
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
                        <img src={img_test_2} alt="image" />
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
                        <img src={img_test_3} alt="" />
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
                        <img src={img_test_1} alt="" />
                     </div>
                     <span class="fa fa-quote-left d-block"></span>
                     <p class="description">
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                    </p>
                     <h3 class="title">John Dow</h3>
                     <span class="post">September12, 2020</span>
                  </div>
                  
                  <div class="testimonial "  >
                     <div class="pic">
                        <img src={img_test_2} alt="" />
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
                        <img src={img_test_3} alt="" />
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
                        <img src={img_test_1} alt="" />
                     </div>
                     <span class="fa fa-quote-left d-block"></span>
                     <p class="description">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                    </p>
                     <h3 class="title">John Dow</h3>
                     <span class="post">September12, 2020</span>
                  </div>

               </OwlCarousel>
             
                  ):  <OwlCarousel
                  className="owl-theme"
                   
                  ref={carosel}
                  items={3}  
                  dotData= {true}
                  onChange = {onSlideChange }
                   
               >
                  
                  <div class= {"testimonial"  }>
                     <div class="pic">
                        <img src={img_test_1} alt="image" />
                     </div>
                     <span class="fa fa-quote-left d-block"></span>
                     <p class="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                    </p>
                     <h3 class="title">John Dow</h3>
                     <span class="post">September12, 2020</span>
                  </div>
                 
                  <div class="testimonial active">
                     <div class="pic">
                        <img src={img_test_2} alt="image" />
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
                        <img src={img_test_3} alt="" />
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
                        <img src={img_test_1} alt="" />
                     </div>
                     <span class="fa fa-quote-left d-block"></span>
                     <p class="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                    </p>
                     <h3 class="title">John Dow</h3>
                     <span class="post">September12, 2020</span>
                  </div>
                  
                  <div class="testimonial  active">
                     <div class="pic">
                        <img src={img_test_2} alt="" />
                     </div>
                     <span class="fa fa-quote-left d-block"></span>
                     <p class="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                    </p>
                     <h3 class="title">John Dow</h3>
                     <span class="post">September12, 2020</span>
                  </div>
                  
                  <div class="testimonial  ">
                     <div class="pic">
                        <img src={img_test_3} alt="" />
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
                        <img src={img_test_1} alt="" />
                     </div>
                     <span class="fa fa-quote-left d-block"></span>
                     <p class="description">
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                    </p>
                     <h3 class="title">John Dow</h3>
                     <span class="post">September12, 2020</span>
                  </div>
                  <div class="testimonial active">
                     <div class="pic">
                        <img src={img_test_1} alt="" />
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
                        <img src={img_test_1} alt="" />
                     </div>
                     <span class="fa fa-quote-left d-block"></span>
                     <p class="description">
                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                    </p>
                     <h3 class="title">John Dow</h3>
                     <span class="post">September12, 2020</span>
                  </div>

               </OwlCarousel>
               }
                 
                 
                 
                  {/* </div> */}

               </div>


            </div>
         </div>
      </section>
   );
}
TestiMonial.propTypes = {

};


// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = ({


// })
export default (TestiMonial);

