import React, { Component } from "react";
import account1 from  '../../assets/images/account/1.png'
import account2 from  '../../assets/images/account/2.png'
import account3 from  '../../assets/images/account/3.png'
import account4 from  '../../assets/images/account/4.png'
import account5 from  '../../assets/images/account/5.png'
import account6 from  '../../assets/images/account/6.png'
import account7 from  '../../assets/images/account/7.png'
import account8 from  '../../assets/images/account/8.png'
import account9 from  '../../assets/images/account/9.png'
import account10 from '../../assets/images/account/10.png'
import account11 from '../../assets/images/account/11.png'
import account12 from '../../assets/images/account/11.png'
import Fade from 'react-reveal/Fade';
class SectionTopRated extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         show_more: false,
         image_list: [account1, account2, account3, account4, account5, account6, account7, account8,]
      };
   }
   handleClick = () => {
      var list = [...this.state.image_list , account9, account10, account11, account12 ]
      this.setState({ image_list: list});
   }
   renderAccount = () => {
      return this.state.image_list.map((item, i) =>
         <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="card wow fadeInUp" data-wow-delay="0.4s">
               <Fade bottom cascade delay={50}>
                  <a >
                     <img class="card-img-top" src={item} alt="account" />
                     <ul class="rating-detail d-flex">
                        <li>
                           <span class="icon-trophy"></span>
                           <p>87 champs</p>
                        </li>
                        <li>
                           <span class="icon-dollar"></span>
                           <p>18 skins</p>
                        </li>
                        <li>
                           <span class="icon-star"></span>
                           <p>Level 72</p>
                        </li>
                     </ul>
                     <div class="card-body">
                        <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                        <ul class="rank-block d-flex">
                           <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                           <li>Server: <span class="text-secondary d-block">EUW</span></li>
                        </ul>
                        <h6 class="price">240.00 EUR</h6>
                     </div>
                  </a>
               </Fade>
               <div class="overlayer">
                  <div class="inner-cnt">
                     <div class="wrap-link">
                        <a class="btn btn-secondary"  >Details</a>
                     </div>
                     <div class="wrap-date">
                        <div class="label">Creation Date:</div>
                        <div class="date">Jun 15, 2020</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
   render() {
    return (
         <section class="account-section" >
            <div class="container">
               <h2 class="text-center wow shakeX">{this.props.page != ''}Top Rated Accounts</h2>
               <div class="row justify-content-center ">
                  {this.renderAccount()}
               </div>
               <div class="row d-md-none">
                  <div class="col-md-4">
                     <div class="slider slider-nav">
                        <div>
                           <div class="card wow fadeInUp" data-wow-delay="0.2s">

                              <a  >
                                 <img class="card-img-top" src={account1} alt="account" />
                                 <ul class="rating-detail d-flex">
                                    <li>
                                       <span class="icon-trophy"></span>
                                       <p>87 champs</p>
                                    </li>
                                    <li>
                                       <span class="icon-dollar"></span>
                                       <p>18 skins</p>
                                    </li>
                                    <li>
                                       <span class="icon-star"></span>
                                       <p>Level 72</p>
                                    </li>
                                 </ul>
                                 <div class="card-body">
                                    <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                    <ul class="rank-block d-flex">
                                       <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                       <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                    </ul>
                                    <h6 class="price">240.00 EUR</h6>
                                 </div>
                              </a>
                           </div>
                        </div>
                        <div>
                           <div class="card wow fadeInUp" data-wow-delay="0.2s">
                              <a  >
                                 <img class="card-img-top" src={account2} alt="account" />
                                 <ul class="rating-detail d-flex">
                                    <li>
                                       <span class="icon-trophy"></span>
                                       <p>87 champs</p>
                                    </li>
                                    <li>
                                       <span class="icon-dollar"></span>
                                       <p>18 skins</p>
                                    </li>
                                    <li>
                                       <span class="icon-star"></span>
                                       <p>Level 72</p>
                                    </li>
                                 </ul>
                                 <div class="card-body">
                                    <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                    <ul class="rank-block d-flex">
                                       <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                       <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                    </ul>
                                    <h6 class="price">240.00 EUR</h6>
                                 </div>
                              </a>
                           </div>
                        </div>
                        <div>
                           <div class="card wow fadeInUp" data-wow-delay="0.2s">
                              <a  >
                                 <img class="card-img-top" src={account3} alt="account" />
                                 <ul class="rating-detail d-flex">
                                    <li>
                                       <span class="icon-trophy"></span>
                                       <p>87 champs</p>
                                    </li>
                                    <li>
                                       <span class="icon-dollar"></span>
                                       <p>18 skins</p>
                                    </li>
                                    <li>
                                       <span class="icon-star"></span>
                                       <p>Level 72</p>
                                    </li>
                                 </ul>
                                 <div class="card-body">
                                    <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                    <ul class="rank-block d-flex">
                                       <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                       <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                    </ul>
                                    <h6 class="price">240.00 EUR</h6>
                                 </div>
                              </a>
                           </div>
                        </div>
                        <div>
                           <div class="card wow fadeInUp" data-wow-delay="0.2s">
                              <a  >
                                 <img class="card-img-top" src={account1} alt="account" />
                                 <ul class="rating-detail d-flex">
                                    <li>
                                       <span class="icon-trophy"></span>
                                       <p>87 champs</p>
                                    </li>
                                    <li>
                                       <span class="icon-dollar"></span>
                                       <p>18 skins</p>
                                    </li>
                                    <li>
                                       <span class="icon-star"></span>
                                       <p>Level 72</p>
                                    </li>
                                 </ul>
                                 <div class="card-body">
                                    <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                    <ul class="rank-block d-flex">
                                       <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                       <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                    </ul>
                                    <h6 class="price">240.00 EUR</h6>
                                 </div>
                              </a>
                           </div>
                        </div>
                        <div>
                           <div class="card wow fadeInUp" data-wow-delay="0.2s">
                              <a  >
                                 <img class="card-img-top" src={account2} alt="account" />
                                 <ul class="rating-detail d-flex">
                                    <li>
                                       <span class="icon-trophy"></span>
                                       <p>87 champs</p>
                                    </li>
                                    <li>
                                       <span class="icon-dollar"></span>
                                       <p>18 skins</p>
                                    </li>
                                    <li>
                                       <span class="icon-star"></span>
                                       <p>Level 72</p>
                                    </li>
                                 </ul>
                                 <div class="card-body">
                                    <p class="card-text">Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt </p>
                                    <ul class="rank-block d-flex">
                                       <li>Rank of Account <span class="text-secondary d-block">BRONZE II</span></li>
                                       <li>Server: <span class="text-secondary d-block">EUW</span></li>
                                    </ul>
                                    <h6 class="price">240.00 EUR</h6>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-md-12 text-center">
                     <button type="button" class="btn btn-primary text-uppercase mt-md-4 px-5" onClick={this.handleClick}>View all</button>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
SectionTopRated.propTypes = {
};

export default (SectionTopRated);
