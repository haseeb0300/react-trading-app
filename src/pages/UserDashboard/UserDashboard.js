import React, { PureComponent } from 'react';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import SellAccount from '../Accounts/SellAccount';
import DashboardHeader from '../../component/dashboadSection/DashboardHeader'
import Fade from 'react-reveal/Fade';
import Mascot from '../../assets/images/mascot_bg.png'





class UserDashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

            isLoading: false,

        };
    }
    componentDidMount() {

    }
    render() {


        return (
            <div class="wrapper">
                {/* <section class="banner-section section-background-image" >
                    <div class="container">
                        <div class="row align-items-center">
                        <Flip top delay={900}> 
                            <h1 className="text-center"> User dashboard will Comming Soon </h1>
                   

                            </Flip>
                        </div>
                    </div>
                </section> */}

                <section class="banner-section" >
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-12 text-center">
                                <Flip bottom delay={200}>
                                    <div>
                                        <h1 class="wow flipInX mt-3" data-wow-delay="0.6s">Sell Your Account</h1>
                                    </div>
                                </Flip>
                                <Fade bottom delay={900}>
                                    <p class="wow fadeInUp" data-wow-delay="1s"><strong>LOL Trading is a professional marketplace for buyers & sellers
                                    <br className="d-none d-md-block"></br>of League of Legends accounts.</strong>
                                    </p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </section>
                <DashboardHeader>

                </DashboardHeader>

                <section class="payment-section wow fadeInUp pt-5" data-wow-delay="0.6s">
               <div class="container">
                  <h4>MARKETPLACE</h4>
                  <h4>BUY ACCOUNT</h4>
                  <div class="card">
                     <div class="card-body py-md-3">
                        <div class="row justify-content-center align-items-center">
                           <div class="col-md-3 col-lg-3">
                              <img class="img-fluid" src={Mascot} alt="mascot_bg"/>
                           </div>
                           <div class="col-md-9 col-lg-7 text-center">
                              <h4 class="mt-4 mt-md-0">THERE IS NO ACCOUNT PURCHASED</h4>
                              <a href="javascript:void(0)" class="btn btn-primary">BUY ACCOUNT</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
                <SellAccount
                    history={this.props.history}
                >

                </SellAccount>

            </div>
        )
    }

}
UserDashboard.propTypes = {
};
export default (UserDashboard);

