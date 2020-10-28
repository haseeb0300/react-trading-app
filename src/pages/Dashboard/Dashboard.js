import React, { Component } from 'react';
import logo from '../../assets/images/logo.png'
import img_test_1 from '../../assets/images/testi-1.png'
import img_test_2 from '../../assets/images/testi-2.png'
import img_test_3 from '../../assets/images/testi-3.png'
import master_img from '../../assets/images/master.png'
import visa_img from '../../assets/images/visa.png'
import paypal_img from '../../assets/images/paypal.png'
import WOW from 'wowjs';
import Footer from '../../assets/Components/Pages/Footer/Footer'
import Header from '../../assets/Components/Pages/Header/Header'
import SectionOurService from '../../assets/Components/Pages/DashboadSection/SectionOurService'
import SectionHistory from '../../assets/Components/Pages/DashboadSection/SectionHistory'
import SectionTopRated from '../../assets/Components/Pages/DashboadSection/SectionTopRated'
import Testimonial from '../../assets/Components/Pages/DashboadSection/SectionTestiMonial'
import SectionNewsLetter from '../../assets/Components/Pages/DashboadSection/SectionNewsLetter'
import $ from "jquery";
import { Link, withRouter } from 'react-router-dom';
import SectionBanner from '../../assets/Components/Pages/DashboadSection/SectionBanner';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
class Dashboard extends Component {
   constructor(props) {
      super(props);
      this.state = {
         serverError: {},
         isLoading: false,
         page:"dashboard",
      };
   }
   componentDidMount() {
       new WOW.WOW({
         live: false
       }).init();
   }
   render() {
      // const { t, i18n } = this.props
      const { t, i18n } = this.props
      const { isLoading } = this.state;
      if (isLoading) {
         return (
            <div className="loader-large"></div>
         )
      }
      return (
         <div class="wrapper">
            {/* <!-- Header section --> */}
            <Header></Header>
            {/* <!-- Banner section --> */}
            <SectionBanner></SectionBanner>
            {/* <!-- Main --> */}
            <main>
               {/* <!-- Our Services --> */}
               <Fade right delay={500}>
              <SectionOurService></SectionOurService>
              </Fade>
               {/* <!-- History Section --> */}
              <SectionHistory></SectionHistory>
               {/* <!-- Top Rated Accounts --> */}
              <SectionTopRated
              page= {this.state.page}
              ></SectionTopRated>
               {/* <!-- Testimonial --> */}
               <Slide bottom delay={200}>

              <Testimonial></Testimonial>
              </Slide>
               {/* <!-- Newsletter Section --> */}
               <SectionNewsLetter></SectionNewsLetter>
            </main>
            {/* <!-- Footer --> */}
            <Footer></Footer>
         </div>
      )
   }

}
Dashboard.propTypes = {
};
export default (Dashboard);

