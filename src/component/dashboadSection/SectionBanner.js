import React, { useState } from "react";
 
 
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
 
function SectionBanner(props) {
    return (
        <section class="banner-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-12 text-center">
                        <Flip top delay={900}> 
                            <h1 class="wow flipInX mt-3" data-wow-delay="0.6s">START YOUR <br></br><span>LEGEND</span></h1>
                        <Slide bottom >
                            <p class="wow fadeInUp" data-wow-delay="1s">
                                LoL Trading is a professional marketplace for <br></br><strong>Sellers of League of Legends accounts.</strong>
                            </p>
                        </Slide>
                        </Flip>
                        <a   class="btn btn-secondary wow fadeInUp mb-md-4" data-wow-delay="1.2s">VIEW ACCOUNTS</a>
                        <Flip bottom delay={900}> 
                        <p class="wow fadeInDown mt-3 mt-md-0" data-wow-delay="1.2s"> 
                         <a  ><span class="icon-angle-down"></span></a></p>
                         </Flip>
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