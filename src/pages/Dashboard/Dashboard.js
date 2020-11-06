import React, { Component } from 'react';
import { connect } from 'react-redux';

import WOW from 'wowjs';
import { getAccount } from '../../store/actions/accountAction'

 
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
         accountList:[],
      };
   }
   componentDidMount() {
       new WOW.WOW({
         live: false
       }).init();
       this.props.getAccount().then((res) => {
         console.log(res)
         if (res.status == true) {
             this.setState({
                 accountList: res.content,
             })
         }
         else {
             alert(res)
         }
     }).catch((err) => {
         console.log(err)

     })
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
              accountList={this.state.accountList}
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
const mapStatetoProps = ({ auth }) => ({
   user: auth.user
})
const mapDispatchToProps = ({
   getAccount
})
Dashboard.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps) (Dashboard);

