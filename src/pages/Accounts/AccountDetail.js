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


class AccountDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,

            accountList: [],
            accountData: {},
        };
    }
    componentDidMount() {
        if (this.props != null && this.props.location.state != null && this.props.location.state.item) {


            console.log(this.props.location.state.item)
            this.setState({
                accountData: this.props.location.state.item

            })
        }

    }


    renderImages = (imageList) => {
        //console.log(orderList)
        if (!imageList) {
            return <div>  <h1>No item to show </h1></div>
        }
        return imageList.map((item, i) =>
            <div class="gallery-img text-center">
                <img src={Gallery} alt="gallery" />
                <h6>#1</h6>
            </div>
        )
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

                <section class="banner-section dashboard-banner"
                // style="background-image: url('assets/images/signup.png');"
                >
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-12 text-center">
                                <h1 class="wow flipInX mt-3" data-wow-delay="0.6s">SELLING ACCOUNT DETAILS</h1>
                                <p class="wow fadeInUp" data-wow-delay="1s">EB24 Tester Program: Try before paying. Claim one free test match or grab 1-hour coaching free of charge.
            <br></br><strong>Applicable to: League of Legends, Teamfight Tactics and Valorant</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Main --> */}
                <main>
                    {/* <!-- Market Place --> */}
                    <section class="marketplace-section">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-4 col-lg-3">
                                    <div class="card counter-block">
                                        <div class="card-body px-0">
                                            <div class="counter-left">
                                                <span class="number">0</span>
                                            </div>
                                            <div class="counter-right">
                                                <span class="number">32000</span>
                                            </div>
                                            <div class="text-center pt-4">
                                                <img src={webp4} alt="4" />
                                            </div>
                                            <div class="list-statistics">
                                                <div class="stat">
                                                    <div class="stat-icon">
                                                        <img alt="champions" src={ChampionsItem} />
                                                    </div>
                                                    <div class="stat-name">
                                                        <span class="name">Champions</span>
                                                    </div>
                                                    <div class="stat-value">
                                                        <span class="value">20</span>
                                                    </div>
                                                </div>
                                                <div class="stat">
                                                    <div class="stat-icon">
                                                        <img alt="skins" src={ItemSkins} />
                                                    </div>
                                                    <div class="stat-name">
                                                        <span class="name">Skins</span>
                                                    </div>
                                                    <div class="stat-value">
                                                        <span class="value">0</span>
                                                    </div>
                                                </div>
                                                <div class="stat">
                                                    <div class="stat-icon">
                                                        <img alt="level" src={ItemLevel} />
                                                    </div>
                                                    <div class="stat-name">
                                                        <span class="name">Level</span>
                                                    </div>
                                                    <div class="stat-value">
                                                        <span class="value">30</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8 col-lg-9 pl-md-5">
                                    <h4 class="account-main-title">EUW Account / 20 Champions / 0 Skins</h4>
                                    <div class="price-block mt-3">
                                        <small>Price</small>
                                        <h3 class="text-secondary">43.00 EUR</h3>
                                    </div>
                                    <div class="account-details mt-3">
                                        <ul class="list">
                                            <li class="item">
                                                <span class="label">Level:</span>
                                                <span class="value">30</span>
                                            </li>
                                            <li class="item">
                                                <span class="label">Champions:</span>
                                                <span class="value">20</span>
                                            </li>
                                            <li class="item">
                                                <span class="label">Blue Essence:</span>
                                                <span class="value">32000</span>
                                            </li>
                                            <li class="item">
                                                <span class="label">Rank of account:</span>
                                                <span class="value">Iron I</span>
                                            </li>
                                            <li class="item">
                                                <span class="label">Skins:</span>
                                                <span class="value">0</span>
                                            </li>
                                            <li class="item">
                                                <span class="label">Server:</span>
                                                <span class="value">EUW</span>
                                            </li>
                                            <li class="item">
                                                <span class="label">RP:</span>
                                                <span class="value">0</span>
                                            </li>
                                            <li class="item">
                                                <span class="label">Queue:</span>
                                                <span class="value">solo_duo</span>
                                            </li>
                                            <li class="item">
                                                <span class="label">Level-up:</span>
                                                <span class="value">
                                                    Botted </span>
                                            </li>
                                            <li class="item">
                                                <span class="label">E-mail Verified:</span>
                                                <span class="value">No</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <button type="button" id="loadMore" class="btn btn-primary text-uppercase mt-3 mt-sm-2 px-5 mb-3">Buy Now</button>
                                    <div class="form-group custom-check">
                                        <input type="checkbox" id="Remember" />
                                        <label for="Remember">Get Lifetime warranty! (20% extra charge)</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row description-account mt-4">
                                <div class="col-md-4 col-lg-3">
                                    <h5>DESCRIPTION:</h5>
                                    <p>[Verified Seller] ✔️Aykxa✔️📣SPECIAL PRICE📣✔️IRON I ACCOUNT EUW✔️ IRON 2 ACC PERFECT FOR SMURF OR TROLL✔️HAVE SKINS ON LOOT✔️❤️GOOD FOR SMURF❤️VERY CHEAP❤️INSTANT-DELIVERY 24/7❤️29-35k BLUE ESSENCE AVAILABLE❤️Seller helped❤️</p>
                                </div>
                                <div class="col-md-8 col-lg-9 pl-md-5">
                                    <h5>GALLERY:</h5>
                                    {this.state.accountData && this.state.accountData.Images && this.state.accountData.Images.map((item, i) =>
                                        <div class="gallery-img text-center">
                                            <img src={item.image_url} alt="gallery" />
                                    <h6>#{i+1}</h6>
                                        </div>
                                    )}
                                    {this.state.accountData && this.state.accountData.Images &&  this.state.accountData.Images.length == 0 && 
                                        <div class="gallery-img text-center">
                                            <img src={Gallery} alt="gallery" />
                                    <h6>#1</h6>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div class="row tab-account mt-4 mt-md-5">
                                <div class="col-md-12">
                                    <ul class="nav nav-pills mb-4 pb-md-3" id="pills-tab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="seller-info-tab" data-toggle="pill" href="#seller-info" role="tab" aria-controls="seller-info" aria-selected="true"><span class="icon-seller"></span> Seller information</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="ranking-tab" data-toggle="pill" href="#ranking" role="tab" aria-controls="ranking" aria-selected="false"><span class="icon-ranking"></span> Account ranking</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="reviews-tab" data-toggle="pill" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false"><span class="icon-review"></span> Reviews</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="seller-info" role="tabpanel" aria-labelledby="seller-info-tab">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Seller name:</td>
                                                        <td>Aykxa</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Number of sales:</td>
                                                        <td>611</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Number of reviews:</td>
                                                        <td>4</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="tab-pane fade" id="ranking" role="tabpanel" aria-labelledby="ranking-tab">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            Queue: Solo/Duo (5v5)
                           </td>
                                                        <td>
                                                            Iron I
                           </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                            <div class="row justify-content-center">
                                                <div class="col-md-6 col-lg-4">
                                                    <div class="card mb-3 mb-lg-0">
                                                        <div class="card-body">
                                                            <p>10/10</p>
                                                            <small>2020-04-24 23:51:12</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-lg-4">
                                                    <div class="card mb-3 mb-lg-0">
                                                        <div class="card-body">
                                                            <p>Good and fast service, also the Support anwsered quickly and nicely!</p>
                                                            <small>2020-04-24 23:51:12</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-lg-4">
                                                    <div class="card mb-3 mb-lg-0">
                                                        <div class="card-body">
                                                            <p>I love the quote I bought 3 accounts without any problem and without any scam.</p>
                                                            <small>2020-04-24 23:51:12</small>
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
                    {/* <!-- How Works --> */}
                    <section class="how-works-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <h4 class="wow fadeInDown" data-wow-delay="0.6s">HOW IT WORKS</h4>
                                </div>
                                <div class="col-md-12">
                                    <div class="how-works">
                                        <div class="step wow fadeInRight" data-wow-delay="0.6s">
                                            <div class="wrap-icon">
                                                <div class="icon man">
                                                    <span class="icon-buyer"></span>
                                                </div>
                                            </div>
                                            <div class="wrap-label">
                                                <h6 class="label">1. Buyer choose<br></br> desired account</h6>
                                            </div>
                                        </div>
                                        <div class="separator wow fadeInRight" data-wow-delay="0.8s"></div>
                                        <div class="step wow fadeInRight" data-wow-delay="0.8s">
                                            <div class="wrap-icon">
                                                <div class="icon select-payment">
                                                    <span class="icon-payment-method"></span>
                                                </div>
                                            </div>
                                            <div class="wrap-label">
                                                <h6 class="label">2. Buyer select<br></br> payment method</h6>
                                            </div>
                                        </div>
                                        <div class="separator wow fadeInRight" data-wow-delay="1s"></div>
                                        <div class="step wow fadeInRight" data-wow-delay="1s">
                                            <div class="wrap-icon">
                                                <div class="icon basket">
                                                    <span class="icon-cart"></span>
                                                </div>
                                            </div>
                                            <div class="wrap-label">
                                                <h6 class="label">3. Loltrading proceed<br></br> the payment</h6>
                                            </div>
                                        </div>
                                        <div class="separator wow fadeInRight" data-wow-delay="1.3s"></div>
                                        <div class="step wow fadeInRight" data-wow-delay="1.3s">
                                            <div class="wrap-icon">
                                                <div class="icon folder">
                                                    <span class="icon-info"></span>
                                                </div>
                                            </div>
                                            <div class="wrap-label">
                                                <h6 class="label">4. Buyer receive account<br></br> informations and<br></br> confirms delivery</h6>
                                            </div>
                                        </div>
                                        <div class="separator wow fadeInRight" data-wow-delay="1.6s"></div>
                                        <div class="step wow fadeInRight" data-wow-delay="1.6s">
                                            <div class="wrap-icon">
                                                <div class="icon coin">
                                                    <span class="icon-hand"></span>
                                                </div>
                                            </div>
                                            <div class="wrap-label">
                                                <h6 class="label">5. Seller Receive<br></br> money</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row note-block pt-3 pt-md-5 mb-5">
                                <div class="col-md-12">
                                    <div class="card">
                                        <div class="card-body text-center">
                                            <h5>Buyers</h5>
                                            <p>
                                                <strong>I.</strong> The General Terms and Conditions of Sale of the website, under the domain https://www.loltrading.com (hereinafter referred to “Lol Trading”), specify terms of use of the website by the Users &amp; Selling Users.
                  </p>
                                            <p>
                                                The administrator of the website (“The Service provider”) is:
                  </p>
                                            <p>
                                                Lol Trading Group LTD<br></br>
                     Unit 4e Enterprise Court, Farfield Park<br></br>
                     S63 5DB - Rotherham<br></br>
                     United Kingdom<br></br>
                                            </p>
                                            <p>
                                                The e-mail of the service provider is: support@Lol Trading.eu<br></br><br></br>
                     Any proclamations of intent between the Users, Selling Users, and the Service Provider will be announced in electronic form, which means sending and delivering an e-mail to the e-mail address provided in the registration form.
                  </p>
                                            <p>
                                                <strong>II.</strong> Lol Trading administrates and operate on the website designed for buying digital services, such as Boosting &amp; Coaching in a game called League of Legends (hereinafter referred to "LOL"), as well as Selling accounts of the game (League of Legends) offered by the Service &amp; Selling Users on this website or any sub-domains.
                  </p>
                                            <p>
                                                <strong>IV.</strong> Lol Trading does not purchase any digital content, as well as League of Legends accounts, from the Sellers or Selling Users and does not re-sell them to Users.
                  </p>
                                            <div class="more-text">
                                                <p>
                                                    Definitions:
                     </p>
                                                <p>
                                                    <strong>Digital Goods</strong> - non-physical goods, created on the basis User individual choice or decision. Lol Trading enables the following types of digital products: League of Legends accounts.
                     </p>
                                                <p>
                                                    <strong>Selling Users</strong> - an entrepreneur or individual, who is not an entrepreneur, selling via the website system and being the owner of League of Legends accounts.
                     </p>
                                                <p>
                                                    <strong>Website</strong> - site which is available under the link https://www.loltrading.com. No other website has a direct connection with Lol Trading.
                     </p>
                                                <p>
                                                    <strong>Selling Account Marketplace</strong> - (hereinafter referred to “Selling Account”), is a virtual good, based on the subject where Service Provider &amp; Selling Users can sell League of Legends Accounts. We enable the ability to sell League of Legends accounts on all servers (North America, Europe West, Europe East &amp; Nordic, Brazil, Latin America, Russia, Turkey &amp; Oceania). Lol Trading does not own League of Legends accounts. The accounts are provided by Selling Users.
                     </p>
                                                <p>
                                                    <strong>3. Registration form, User account, Selling User account, Guest Account</strong>
                                                </p>
                                                <p>
                                                    <strong>3.4</strong> If the User wants to sell products through the website, he or she will be obligated to fill additional information located on his profile. The user will be compelled to provide the following details in “Edit Profile”: his or her current name and surname, select his or her withdrawal method and provide correct withdrawal information. Lol Trading is not responsible for any damages or losses if the Selling User will provide false or incorrect information.
                     </p>
                                                <p>
                                                    <strong>3.5</strong> Lol Trading reserves the right to terminate or suspend the User’s account. If a User’s account will be suspended or removed and any balance that remains on the account, Lol Trading can freeze or remove this balance due to breaching General Terms and Conditions of Sale of the Service Provider. More information about breach of General Terms and Conditions of Sale might be found in the following regulations at points 17, 17.1 and 17.2. Lol Trading reserves the right to terminate or suspend the User’s account if the User creates situations that might be reflected as possible of violation of the company interest’s.
                     </p>
                                                <p>
                                                    <strong>6. Purchases on the Website</strong>
                                                </p>
                                                <p>
                                                    <strong>6.1</strong> The Customer can purchase Virtual Services (Boosting &amp; Coaching) and Virtual Goods (Selling Account) through the website. The customer needs to accept the General Terms and Conditions of the Lol Trading.eu website before the purchase.
                     </p>
                                                <p>
                                                    <strong>6.2</strong> The Customer can purchase products listed above as a User (a registered member of the website - before he makes a purchase) or as a Guest (not a registered Member on the site - before he makes a purchase).
                     </p>
                                                <p>
                                                    <strong>6.3</strong> If the Customer purchases the product as a Guest, the account will be created automatically by the Service Provider, and then will be delivered through electronic form to the customer, on the e-mail address provided by him or her during the process of purchase.
                     </p>
                                                <p>
                                                    <strong>6.4</strong> The Customers are the persons, who want to purchase the following services and goods: acquisitions of levels in a virtual game called League of Legends, coaching in a game called League of Legends and accounts of the game League of Legends. The customer issues the product by uploading it on the website. The execution of the listed services and goods is made on the basis agreement between User and the Service Provider.
                     </p>
                                                <p>
                                                    <strong>6.5</strong> If the Customer purchases a League of Legends account, he’s not obligated to provide any information. After the purchase, the Customer will receive in return the account credentials of the newly purchased account on the website.
                     </p>
                                                <p>
                                                    <strong>6.7</strong> After the purchase of a Virtual Good (Selling Accounts), the customer is not obligated to provide any additional information. The customer will gain access to a specified area on his profile, where he will receive the account credentials of the purchased products.
                     </p>
                                                <p>
                                                    <strong>7. Order Process, Customer, Service Provider and Selling User Obligations, Service Rights</strong>
                                                </p>
                                                <p>
                                                    <strong>7.1</strong> The agreement between the customer and Service Provider is valid until the Virtual Service (Boosting/Coaching) is delivered, or Virtual Good (Selling Account) is transferred to the new owner.
                     </p>
                                                <p>
                                                    <strong>7.1.6</strong> If the customer purchased a LOL account, the agreement is valid until the account warranty period will expire.
                     </p>
                                                <p>
                                                    <strong>7.2</strong> The agreement between the Customer and Service Provider, may be terminated by The Service Provider, if the customer doesn’t provide any actions by 120 days, such as: not providing sufficient information mentioned in points 6.5, 6.51, 6.52, 6.53, 6.54., not contacting with The Booster/Coach/Selling User for 120 days or more, pausing the Boost/Coaching for 120 days or more, not logging into his profile for 120 days or more.
                     </p>
                                                <p>
                                                    <strong>7.2.1</strong> The agreement between the Customer and Service Provider, may be terminated by The Service Provider if the customer’s breach the following General Terms and Conditions of Sale of the Lol Trading.eu website.
                     </p>
                                                <p>
                                                    <strong>7.2.2</strong> If the Service Provider terminates the agreement, unused credit will be deducted as an administration fee.
                     </p>
                                                <p>
                                                    <strong>7.7</strong> If the customer purchases a LOL Account, he or she will be granted additional buyer protection.
                     </p>
                                                <p>
                                                    <strong>7.7.1</strong> This warranty will take a specific amount of time, depending on the account type.
                        - the account without any label (Selling User) guarantees the 7-days basic warranty period<br></br>
                        - the account with the Lol Trading label (violet) or verified seller label (green) extend your warranty period to 14-days<br></br>
                        - the account with a customized label (yellow), apply two different warranty period, 14 days for the botted accounts and the lifetime period for the handmade accounts.<br></br><br></br>
                        The warranty will be applicable after the successful payment.
                     </p>
                                                <p>
                                                    <strong>7.7.2</strong> The buyer can extend the warranty period to lifetime by paying 20% fixed fee based on the account price.
                     </p>
                                                <p>
                                                    <strong>7.7.3</strong> The Service Provider is not liable for the usage of the account after the protection period expires.
                     </p>
                                                <p>
                                                    <strong>7.9</strong> The Virtual Goods (League of Legends Account) transfer will be completed; once the Service Provider will deliver to the buyer valid account credentials and no complaint will be filled.
                     </p>
                                                <p>
                                                    <strong>8. Additional Terms and Conditions of the Sales of Virtual Goods (League of Legends accounts), owned by Selling Users.</strong>
                                                </p>
                                                <p>
                                                    <strong>8.1</strong> The Service Provider reserves the right to provide the sale of Virtual Goods (League of Legends accounts).
                     </p>
                                                <p>
                                                    <strong>8.2</strong> The Service Provider reserves the right to approve or disapprove requests of Virtual Good sales by the Selling User (League of Legends account)
                     </p>
                                                <p>
                                                    <strong>8.2.1</strong> The Service Provider will inform the Selling User about the approval or disapproval through the e-mail connected to his Selling profile.
                     </p>
                                                <p>
                                                    <strong>8.3</strong> The Service Provider reserves the right to approve or disapprove requests about editing information of the Virtual Good (League of Legends account) owned by the Selling User.
                     </p>
                                                <p>
                                                    <strong>8.3.1</strong> The Service Provider will inform the Selling User about the approval or disapproval through the e-mail connected to his Selling profile.
                     </p>
                                                <p>
                                                    <strong>8.4</strong> The Service provider reserves the right to input service fees on the account offered by the Selling Users on the website.
                     </p>
                                                <p>
                                                    <strong>8.4.1</strong> The Service provider will apply the following fees:<br></br><br></br>
                                                    <strong>Selling User:</strong><br></br>
                        0 - 20 EUR/USD - 40%<br></br>
                        21 - 50 EUR/USD - 35%<br></br>
                        51 - 75 EUR/USD - 30%<br></br>
                        76-100 EUR/USD - 25%<br></br>
                        101-150 EUR/USD - 20%<br></br>
                        151-200 EUR/USD - 20%<br></br>
                        201 EUR/USD - 20%<br></br>
                        *the minimum applied fee is 4 EUR/USD<br></br><br></br>
                                                    <strong>Verified Sellers:</strong><br></br>
                        0 - 20 EUR/USD - 30%<br></br>
                        21 - 50 EUR/USD - 25%<br></br>
                        51 - 75 EUR/USD - 20%<br></br>
                        76-100 EUR/USD - 20%<br></br>
                        101-150 EUR/USD - 20%<br></br>
                        151-200 EUR/USD - 15%<br></br>
                        201 EUR/USD - 15%<br></br>
                        *the minimum applied fee is 4 EUR/USD<br></br>
                                                    <strong>Comfort sell fee:</strong><br></br>
                        0-20 EUR/USD - 0.99 EUR/USD<br></br>
                        21-100 EUR/USD - 1.49 EUR/USD<br></br>
                        101 - 200 EUR/USD - 2.49 EUR/USD<br></br>
                        201+ EUR/USD - 3.49 EUR/USD<br></br><br></br>
                                                </p>
                                                <p>
                                                    <strong>8.4.2</strong> The Service provider reserves the right to input higher service fees on the account offered by the Selling Users on the website.
                     </p>
                                                <p>
                                                    <strong>8.5</strong> The Service provider reserves the right to remove the Virtual Good (League of Legends account) at any time while on sale.
                     </p>
                                                <p>
                                                    <strong>8.6</strong> The Service provider reserves the right to freeze the amount of money paid to the Selling User (the same amount he wished to sell the account, excluding the addition fees) for seven days after the transaction was compromised.
                     </p>
                                                <p>
                                                    <strong>8.7</strong> The Selling User is obliged to confirm that he complies with the Terms of Service, Seller Agreement and that he did not use the account for at least seven days, if the Selling User won’t fulfill the obligations or provide false information, the Service Provider reserve the right to freeze the money or file a claim to retrieve the money back.
                     </p>
                                                <p>
                                                    <strong>8.8</strong> The Selling User has the right to withdraw the money after the freeze period expires.
                     </p>
                                                <p>
                                                    <strong>8.9</strong> You, the Selling User accept that if you claim the account back after the Virtual Good (League of Legends account) was transferred to its new owner (customer), you are in direct breach of Lol Trading.eu’s terms of use, and legally bound to either give the account back to the customer or pay back the same amount in addition to a fee determined by Lol Trading.eu, no less than 50 Euro and no more than three times the original amount if the order placed cost more than 50 Euro. Should you fail to abide by either option, you, the Selling User, accept full liability in a court of law as determined by the European Trade Laws.<br></br><br></br>
                                                    <strong>8.9.1</strong> You, the Selling User, accept that if you claim the account back after the Virtual Good (League of Legends account) was transferred to its new owner (customer), your bill will be sent to a debt collector agency and you also accept that you will have to pay the extra fees to cover both debt collectors agency and any other unforeseen costs because of your chargeback.
                     </p>
                                                <p>
                                                    <strong>11. Refund and Chargeback Policy in Selling Accounts Sales</strong>
                                                </p>
                                                <p>
                                                    <strong>11.1</strong> You, the customer, accept that once you have purchased a Virtual Good (LOL account) and you received the account credentials of the purchased account, you are no longer eligible to receive a refund. If the account credentials are not valid, you have the right to store your unused credit. The Service Provider cannot terminate your remaining credit.
                     </p>
                                                <p>
                                                    <strong>11.2</strong> You, the customer, accept that if you open a claim after the order has gone through or the service has started or been completed, you are in direct breach of Lol Trading.eu's terms of use, and legally bound to either close the claim or pay back the same amount in addition to a fee determined by Lol Trading.eu, no less than 100 Euro and no more than three times the original amount if the order placed cost more than 100 Euro. Should you fail to abide by either option, you, the customer, accept full liability in a court of law as determined by the European Trade Laws.
                     </p>
                                                <p>
                                                    <strong>11.3</strong> The customer is eligible to request a refund for a Virtual Good (LOL Account) within 48 hours after the purchase, this applies to situations where the Service Provider hasn't provided the account credentials of the purchased account. The Customer can issue a refund by submitting an inquiry in the contact form or contacting us through the live chat.
                     </p>
                                                <p>
                                                    <strong>11.3.1</strong> You, the customer, accept that if you request a refund, the administration fee on the amount of 25% of the total amount of the Service will be applied.
                     </p>
                                                <p>
                                                    <strong>11.3.2</strong> You, the customer, accept that if you request a refund, the Service Provider will transfer the payment provider fee to your responsibility.
                     </p>
                                                <p>
                                                    <strong>11.3.3</strong> After the Customer requests a refund; the Service Provider proceeds the following refund within 14 days after submitting the request.
                     </p>
                                                <p>
                                                    <strong>11.4</strong> The customer is eligible to request a refund for a Virtual Good (LOL Account) after 14 days from the date of the purchase, this applies to situations when the Service Provider hasn’t provided the account credentials. The Customer can issue a refund by submitting an inquiry in the contact form or contacting us through the live chat.
                     </p>
                                                <p>
                                                    <strong>11.4.1</strong> You, the customer, accept that if you request a refund, the administration fee won’t be applied.
                     </p>
                                                <p>
                                                    <strong>11.4.2</strong> You, the customer, accept that if you request a refund, the Service Provider will transfer the payment provider fee to your responsibility.
                     </p>
                                                <p>
                                                    <strong>11.4.3</strong> After the Customer requests a refund; The Service Provider proceeds the following refund within 14 days after submitting the request.
                     </p>
                                                <p>
                                                    <strong>11.5</strong> In specific cases not listed above, The Service Provider reserves the right to proceed a refund or a partial refund. All those refunds will be an exclusive discretion of the site management.
                     </p>
                                                <p>
                                                    <strong>11.5.1</strong> You, The Customer, accept that in those specific cases, the administration fee on the amount 10% of the total amount of the Service will be applied.
                     </p>
                                                <p>
                                                    <strong>11.5.2</strong> You, The Customer, accept that in those specific cases, the Service Provider will transfer the payment provider fee to your responsibility.
                     </p>
                                                <p>
                                                    <strong>11.5.3</strong> You, The Customer, accept that in those specific cases, the Service Provider proceeds the following refund within 14 days after submitting the request.
                     </p>
                                                <p>
                                                    <strong>11.6</strong> You, the customer, accept that if you claim a chargeback of a payment for a good that has been completed, your bill will be sent to a debt collector agency, and you also accept that you will have to pay the extra fees to cover both debt collectors agency and any other unforeseen costs because of your chargeback.
                     </p>
                                                <p>
                                                    <strong>13. Payments</strong>
                                                </p>
                                                <p>
                                                    <strong>13.1</strong> You can pay for the services using the following methods: G2A, Skrill, Paysera.
                     </p>
                                                <p>
                                                    <strong>13.2</strong> All the payment fees are on the Service Provider.
                     </p>
                                                <p>
                                                    <strong>13.3</strong> The Service Provider is not responsible for failed or rejected from the Payment Provider payments.
                     </p>
                                                <p>
                                                    <strong>14. Complain</strong>
                                                </p>
                                                <p>
                                                    <strong>14.1</strong> The customer has the right to complain about the service he purchased.
                     </p>
                                                <p>
                                                    <strong>14.2</strong> The customer can file a complaint if the service is not provided or wasn't provided as described.
                     </p>
                                                <p>
                                                    <strong>14.3</strong> If the customer wants to file a complaint, he should follow the following steps:
                        <br></br>
                                                    <strong>14.3.1</strong> Go to the website
                        <br></br>
                                                    <strong>14.3.2</strong> Go to the “Contact Us” Tab.
                        <br></br>
                                                    <strong>14.3.3</strong> Submit an inquiry with the subject ”Complain”, describing what was wrong.
                     </p>
                                                <p>
                                                    <strong>14.4</strong> All complaints will be answered within 14 days, after the date of receiving the complaint.
                     </p>
                                                <p>
                                                    <strong>14.5</strong> If we don’t resolve the complaint, it doesn’t mean that we agreed with the customer.
                     </p>
                                                <p>
                                                    <strong>17. Termination of Using the Website</strong>
                                                </p>
                                                <p>
                                                    <strong>17.1</strong> The Service Provider may terminate your usage of the website without notifying you, if you make an Illegal usage of the Website.
                     </p>
                                                <p>
                                                    <strong>17.2</strong> The Service Provider might especially terminate your usage of the website if:<br></br>
                        - you breach the General Terms and Conditions of Sale of the Lol Trading.eu,<br></br>
                        - you upload illegal Data,<br></br>
                        - you release Personal Data of other Users,<br></br>
                        - you violate the terms of use of the Account,<br></br>
                        - user activity might be reflected as possible of violation of the company interest’s.
                     </p>
                                                <p>
                                                    If you want to know more specific informations, check our Terms of Service here.
                     </p>
                                            </div>
                                            <button class="btn btn-primary btn-active py-2 px-3 mt-3">Show More</button>
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
                                                    <img src={skrill} alt="skrill" />
                                                </div>
                                                <div>
                                                    <img src={stripe} alt="stripe" />
                                                </div>
                                                <div>
                                                    <img src={paypal} alt="paypal" />
                                                </div>
                                                <div>
                                                    <img src={master} alt="master" />
                                                </div>
                                                <div>
                                                    <img src={visa} alt="visa" />
                                                </div>
                                                <div>
                                                    <img src={skrill} alt="skrill" />
                                                </div>
                                                <div>
                                                    <img src={stripe} alt="stripe" />
                                                </div>
                                                <div>
                                                    <img src={paypal} alt="paypal" />
                                                </div>
                                                <div>
                                                    <img src={master} alt="master" />
                                                </div>
                                                <div>
                                                    <img src={visa} alt="visa" />
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
AccountDetail.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(AccountDetail);

