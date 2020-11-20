import React from "react";

import UserProfileavatar from '../../assets/images/user_profile_avatar.webp'
import DiscordPurple from '../../assets/images/discord_purple.svg'
import Discord from '../../assets/images/discord.webp'
import Facebook from '../../assets/images/facebook.webp'
import Mascot from '../../assets/images/mascot_bg.png'
function DashboardHeader(props) {
    return (

       
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
                                      <li class="item ">
                                         <a href="javascript:void(0)"><span class="text">Boosting</span></a>
                                      </li>
                                      <li class="item">
                                         <a href="javascript:void(0)"><span class="text">Coaching</span></a>
                                      </li>
                                      <li class="item active">
                                         <a href="javascript:void(0) "><span class="text">Marketplace</span></a>
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
 

    );
}
DashboardHeader.propTypes = {};

export default DashboardHeader;