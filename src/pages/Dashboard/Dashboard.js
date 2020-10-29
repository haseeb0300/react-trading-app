import React, { Component } from 'react';
 
import WOW from 'wowjs';
 
import SectionOurService from '../../component/dashboadSection/SectionOurService'
import SectionHistory from '../../component/dashboadSection/SectionHistory'
import SectionTopRated from '../../component/dashboadSection/SectionTopRated'
import Testimonial from '../../component/dashboadSection/SectionTestiMonial'
import SectionNewsLetter from '../../component/dashboadSection/SectionNewsLetter'
 
import SectionBanner from '../../component/dashboadSection/SectionBanner';
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
         
         </div>
      )
   }

}
Dashboard.propTypes = {
};
export default (Dashboard);

