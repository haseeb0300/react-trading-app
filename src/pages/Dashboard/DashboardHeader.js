import React, { Component } from 'react';
import { connect } from 'react-redux';

import WOW from 'wowjs';
import { getAccount } from '../../store/actions/accountAction'
import webp4 from '../../assets/images/4.webp'
import ChampionsItem from '../../assets/images/item_champions.webp'
import ItemSkins from '../../assets/images/item_skins.webp'
import ItemLevel from '../../assets/images/item_level.webp'
import Gallery from '../../assets/images/gallery.png'
import skrill from '../../assets/images/skrill.png'
import stripe from '../../assets/images/stripe.png'
import paypal from '../../assets/images/paypal.png'
import master from '../../assets/images/master.png'
import visa from '../../assets/images/visa.png'
import UserProfileavatar from '../../assets/images/user_profile_avatar.webp'
import DiscordPurple from '../../assets/images/discord_purple.svg'
import Discord from '../../assets/images/discord.webp'
import Facebook from '../../assets/images/facebook.webp'
import Mascot from '../../assets/images/mascot_bg.png'



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,
            page: "dashboard",
            accountList: [],
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
         <section class="banner-section dashboard-banner"
        //   style="background-image: url('assets/images/signup.png');"
          >
            <div class="container">
               <div class="row align-items-center">
                  <div class="col-md-12 text-center">
                     <h1 class="wow flipInX mt-3" data-wow-delay="0.6s">COACHING</h1>
                     <p class="wow fadeInUp" data-wow-delay="1s">EB24 Tester Program: Try before paying. Claim one free test match or grab 1-hour coaching free of charge.
                        <br></br><strong>Applicable to: League of Legends, Teamfight Tactics and Valorant</strong>
                     </p>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- Main --> */}
         <main>
{/* 
            <section class="dashboard-section">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <div class="pt-user-backend-header gift-box">
                           <div class="inner">
                              <div class="cnt-cols">
                                 <div class="col-left">
                                    <div class="avatar">
                                       <div class="wrap-image">
                                          <img src={UserProfileavatar} alt="user_profile_avatar"/>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-right">
                                    <div class="part-details">
                                       <div class="col-details-user">
                                          <div class="wrap-name">
                                             <h2 class="name">John</h2>
                                          </div>
                                          <ul class="list-info">
                                             <li class="item discord">
                                                <div class="cnt"><a href="javascript:void(0)">
                                                   <img src={DiscordPurple} alt="discord_purple"/> Discord</a>
                                                </div>
                                             </li>
                                             <li class="item">
                                                <div class="cnt">0 Eloboost24 points</div>
                                             </li>
                                          </ul>
                                          <ul class="list-info-extra">
                                             <li class="item discord">
                                                <div class="cnt">
                                                   <a href="javascript:void(0)"><img src={Discord} alt="discord"/> Connect your profile</a>
                                                </div>
                                             </li>
                                             <li class="item facebook">
                                                <div class="cnt">
                                                   <a href="javascript:void(0)"><img src={Facebook} alt="facebook"/> Connect your profile</a>
                                                </div>
                                             </li>
                                          </ul>
                                       </div>
                                       <div class="col-details-gift-box">
                                          <form>
                                             <input type="hidden" name="" value=""/>
                                             <div class="gift-box-code">
                                                <input class="form-control" name="" autocomplete="false" placeholder="Input your giftbox code..."/>
                                                <button class="btn btn-primary">Submit</button>
                                             </div>
                                          </form>
                                          <div class="wrap-balance">
                                             <div class="name">Gift box Balance</div>
                                             <div class="balance">
                                                <span class="value">0.00</span>
                                                <span class="currency">€</span>
                                             </div>
                                             <div class="balance">
                                                <span class="value">0.00</span>
                                                <span class="currency">$</span>
                                             </div>
                                          </div>
                                          <div class="wrap-btn-buy">
                                             <a class="btn-buy" href="javascript:void(0)">Buy<br class="hidden"></br> Gift Box</a>
                                          </div>
                                       </div>
                                       <div class="col-details-sold-account">
                                          <div class="wrap-balance">
                                             <div class="name">Sold account Balance</div>
                                             <div class="balance">
                                                <div class="balance-available">
                                                   <div class="label">Available </div>
                                                   <span class="value">0</span>
                                                   <span class="currency">
                                                      EUR 
                                                      <div 
                                                    //   style="width:15px; height: 15px;"
                                                       class="fx-information"></div>
                                                   </span>
                                                </div>
                                                <div class="balance-available">
                                                   <div class="label">Available</div>
                                                   <span class="value">0</span>
                                                   <span class="currency">USD</span>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="wrap-balance">
                                             <div class="name">Frozen account Balance</div>
                                             <div class="balance">
                                                <div class="balance-pending">
                                                   <div class="label">Pending</div>
                                                   <span class="value">0</span>
                                                   <span class="currency">
                                                      EUR 
                                                      <div
                                                    //    style="width:15px; height: 15px;" 
                                                       class="fx-information"></div>
                                                   </span>
                                                </div>
                                                <div class="balance-pending">
                                                   <div class="label">Pending</div>
                                                   <span class="value">0</span>
                                                   <span class="currency">USD</span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="part-menu">
                                       <div class="wrap-menu">
                                          <ul class="menu">
                                             <li class="item active">
                                                <a href="javascript:void(0)"><span class="text">Boosting</span></a>
                                             </li>
                                             <li class="item">
                                                <a href="javascript:void(0)"><span class="text">Coaching</span></a>
                                             </li>
                                             <li class="item">
                                                <a href="javascript:void(0)"><span class="text">Marketplace</span></a>
                                             </li>
                                             <li class="item">
                                                <a href="javascript:void(0)"><span class="text">Order History</span></a>
                                             </li>
                                             <li class="item">
                                                <a href="javascript:void(0)"><span class="text">Request Withdraw</span></a>
                                             </li>
                                             <li class="item">
                                                <a href="javascript:void(0)"><span class="text">Edit profile</span></a>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
             */}
            {/* <!-- Coaching -->   */}
            <section class="payment-section wow fadeInUp pt-5" data-wow-delay="0.6s">
               <div class="container">
                  <h4>COACHING</h4>
                  <div class="card">
                     <div class="card-body py-md-3">
                        <div class="row justify-content-center align-items-center">
                           <div class="col-md-3 col-lg-3">
                              <img class="img-fluid" src={Mascot} alt="mascot_bg"/>
                           </div>
                           <div class="col-md-9 col-lg-7 text-center">
                              <h4 class="mt-4 mt-md-0">THERE IS NO CURRENT COACHING SERVICE</h4>
                              <a href="javascript:void(0)" class="btn btn-primary">PURCHASE COACHING</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {/* <!-- Payment Provider --> */}
            <section class="payment-section wow fadeInUp" data-wow-delay="0.6s">
               <div class="container">
                  <h5 class="text-center">PAYMENT PROVIDERS</h5>
                  <div class="card">
                     <div class="card-body">
                        <div class="row">
                           <div class="col-md-12">
                              <div class="carousel mb-0">
                                 <div>
                                    <img src={skrill} alt="skrill"/>
                                 </div>
                                 <div>
                                    <img src={stripe} alt="stripe"/>
                                 </div>
                                 <div>
                                    <img src={paypal} alt="paypal"/>
                                 </div>
                                 <div>
                                    <img src={master} alt="master"/>
                                 </div>
                                 <div>
                                    <img src={visa} alt="visa"/>
                                 </div>
                                 <div>
                                    <img src={skrill} alt="skrill"/>
                                 </div>
                                 <div>
                                    <img src={stripe} alt="stripe"/>
                                 </div>
                                 <div>
                                    <img src={paypal} alt="paypal"/>
                                 </div>
                                 <div>
                                    <img src={master} alt="master"/>
                                 </div>
                                 <div>
                                    <img src={visa} alt="visa"/>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
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
export default connect(mapStatetoProps, mapDispatchToProps)(Dashboard);

