// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import cart from '../../assets/images/cart.svg'
// import sell from '../../assets/images/sell.svg'
// import Slide from 'react-reveal/Slide';
// import WOW from 'wowjs';


// import SectionTopRated from "../../component/dashboadSection/SectionTopRated"
// import SectionAcountFilter from '../../component/dashboadSection/SectionAcountFilter';
// import Fade from 'react-reveal/Fade';
// import Flip from 'react-reveal/Flip';
// class LolAccount extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             serverError: {},
//             isLoading: false,
//             price_range: 'price-range',
//             unmounting: false,
//             page: 'lolAccount',
//             accountList: [],
//             rankList: [],
//             serverList: [],
//             queueList: [],
//             current_rank_id:'',
//             server_id:'',
//             queue_id:'',
//             level_up:'',
//             min_value:0,
//             max_value:2000,


//         };
//     }

//     componentWillUnmount() {

//         this.state = {
//             unmounting: true, // can't use setState because it is async
//         };
//     }

//     componentDidUpdate(prevProps) {

        
//         new WOW.WOW({
//             live: false
//         }).init();
//     }

//     componentDidMount() {

//         // this.props.i18n.changeLanguage("de");

//         new WOW.WOW({
//             live: false
//         }).init();
     
//     render() {



//         const { isLoading } = this.state;

//         if (isLoading) {
//             return (
//                 <div className="loader-large"></div>
//             )
//         }
//         return (
//             <section class="ps-account-details">
//             <div class="st-inner">
//             <div class="st-cnt">
//             <div class="account">
//             <div class="account-cnt">
//             <div class="top-cols">
//             <div class="col-left">
//             <div class="info-card">
//             <div class="counter-left">
//             <span class="number">0</span>
//             </div>
//             <div class="counter-right">
//             <span class="number">45000</span>
//             </div>
//             <div class="main-image">
//             <img alt="eloboost24.eu" src="/images/divisions/27.png"/>
//             </div>
//             <div class="list-statistics">
//             <div class="stat">
//             <div class="stat-icon">
//             <img alt="eloboost24.eu" src="/images/tools/lol_account/item_champions.png"/>
//             </div>
//             <div class="stat-name">
//             <span class="name">Champions</span>
//             </div>
//             <div class="stat-value">
//             <span class="value">20</span>
//             </div>
//             </div>
//             <div class="stat">
//             <div class="stat-icon">
//             <img alt="eloboost24.eu" src="/images/tools/lol_account/item_skins.png"/>
//             </div>
//             <div class="stat-name">
//             <span class="name">Skins</span>
//             </div>
//             <div class="stat-value">
//             <span class="value">15</span>
//             </div>
//             </div>
//             <div class="stat">
//             <div class="stat-icon">
//             <img alt="eloboost24.eu" src="/images/tools/lol_account/item_level.png"/>
//             </div>
//             <div class="stat-name">
//             <span class="name">Level</span>
//             </div>
//             <div class="stat-value">
//             <span class="value">50</span>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             <div class="col-right">
//             <div class="wrap-params">
//             <div class="params">NA&nbsp;Account&nbsp;/ 20&nbsp;Champions&nbsp;/ 15&nbsp;Skins</div>
//             </div>
//             <div class="wrap-price">
//             <div class="label">Price:</div>
//             <div class="price">
//             <span class="value">1299.00</span>
//             <span class="currency">USD</span>
//             </div>
//             </div>
//             <div class="wrap-specification">
//             <ul class="list">
//             <li class="item">
//             <span class="label">Level:</span>
//             <span class="value">50</span>
//             </li>
//             <li class="item">
//             <span class="label">Champions:</span>
//             <span class="value">20</span>
//             </li>
//             <li class="item">
//             <span class="label">Blue Essence:</span>
//             <span class="value">45000</span>
//             </li>
//             <li class="item">
//             <span class="label">Rank of account:</span>
//             <span class="value">Challenger I</span>
//             </li>
//             <li class="item">
//             <span class="label">Skins:</span>
//             <span class="value">15</span>
//             </li>
//             <li class="item">
//             <span class="label">Server:</span>
//             <span class="value">NA</span>
//             </li>
//             <li class="item">
//             <span class="label">RP:</span>
//             <span class="value">0</span>
//             </li>
//             <li class="item">
//             <span class="label">Queue:</span>
//             <span class="value">solo_duo</span>
//             </li>
//             <li class="item">
//             <span class="label">Level-up:</span>
//             <span class="value">
//             Handmade </span>
//             </li>
//             <li class="item">
//             <span class="label">E-mail Verified:</span>
//             <span class="value">No</span>
//             </li>
//             </ul>
//             </div>
//             <div class="wrap-button">
//             <a class="btn-buy" href="https://eloboost24.eu/marketplace/7444/buy" target="_self">Buy now</a>
//             <div class="params">
//             <div class="fx-checkbox"><label><input type="checkbox" data-name="cb-warranty"/>Get Lifetime warranty! (20% extra charge)</label></div>
//             </div>
//             </div>
//             </div>
//             </div>
//             <div class="bottom-cols">
//             <div class="col-left">
//             <div class="account-description">
//             <div class="wrap-title">
//             <h5 class="title">Description:</h5>
//             </div>
//             <div class="description">⭐NA Customized Challenger
//             ✅Hand Made
//             ✅Customized Name
//             ✅Lifetime Warranty
//             ✅Recovery Information
//             ✅Min. amount of BE 45k
//             ✅Role / Champions selection
//             ✅Game mode selection
//             🚚Delivery between 31 - 43 days
//             ➡️Check image for more info</div>
//             </div>
//             </div>
//             <div class="col-right">
//             <div class="account-gallery popup-gallery-script">
//             <div class="wrap-title">
//             <h5 class="title">Gallery:</h5>
//             </div>
//             <div class="gallery">
//             <div class="item" data-id="1">
//             <div class="item-cnt">
//             <div class="wrap-image">
//             <img alt="Screenshot 1" src="https://ucarecdn.com/1c95e8a7-1662-4828-ab32-5dea332b9864~1/nth/0/-/scale_crop/240x320/center/-/progressive/yes/"/>
//             </div>
//             <div class="wrap-name">
//             <h6 class="name">#1</h6>
//             </div>
//             </div>
//             </div>
//             </div>
//             <div class="popup-gallery">
//             <div class="functionalities">
//             <div class="info-image">Image null/1</div>
//             <button type="button" class="close-button">X</button>
//             </div>
//             <div class="arrow-switch-left"></div>
//             <div class="images">
//             <div class="item" data-id="1" style="display: none;">
//             <div class="item-cnt">
//             <div class="wrap-image">
//             <img alt="Screenshot 1" src="https://ucarecdn.com/1c95e8a7-1662-4828-ab32-5dea332b9864~1/nth/0/"/>
//             </div>
//             </div>
//             </div>
//             </div>
//             <div class="arrow-switch-right"></div>
//             </div>
//             </div>
//             </div>
//             </div>
//             <div class="account-tabs">
//             <div class="navigation">
//             <div class="item seller active">
//             <div class="item-cnt">
//             <h6 class="name">Seller information</h6>
//             </div>
//             </div>
//             <div class="item ranking">
//             <div class="item-cnt">
//             <h6 class="name">Account ranking</h6>
//             </div>
//             </div>
//             <div class="item reviews">
//             <div class="item-cnt">
//             <h6 class="name">Reviews</h6>
//             </div>
//             </div>
//             </div>
//             <div class="list-tabs">
//             <div class="tab active">
//             <div class="tab-cnt">
//             <div class="info-table">
//             <table>
//             <tbody>
//             <tr>
//             <td>Seller name:</td>
//             <td>HypeR</td>
//             </tr>
//             <tr>
//             <td>Number of sales:</td>
//             <td>243</td>
//             </tr>
//             <tr>
//             <td>Number of reviews:</td>
//             <td>3</td>
//             </tr>
//             </tbody>
//             </table>
//             </div>
//             </div>
//             </div>
//             <div class="tab">
//             <div class="tab-cnt">
//             <div class="info-table">
//             <table>
//             <tbody>
//             <tr>
//             <td>
//             Queue: Solo/Duo (5v5)
//             </td>
//             <td>
//             Challenger I </td>
//             </tr>
//             </tbody>
//             </table>
//             </div>
//             </div>
//             </div>
//             <div class="tab">
//             <div class="tab-cnt">
//             <div class="list-review">
//             <div class="item">
//             <div class="inner-cnt">
//             <div class="cnt">
//             <blockquote class="quote">
//             best website ever
//             </blockquote>
//             <div class="date">2020-02-23 19:36:35</div>
//             </div>
//             </div>
//             </div>
//             <div class="item">
//             <div class="inner-cnt">
//             <div class="cnt">
//             <blockquote class="quote">
//             Best
//             </blockquote>
//             <div class="date">2020-02-26 04:34:15</div>
//             </div>
//             </div>
//             </div>
//             <div class="item">
//             <div class="inner-cnt">
//             <div class="cnt">
//             <blockquote class="quote">
//             received my account real quick 10/10 service
//             </blockquote>
//             <div class="date">2020-03-13 18:51:13</div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </div>
//             <div class="wrap-how-works">
//             <div class="wrap-title">
//             <h5 class="title">How It works</h5>
//             </div>
//             <div class="how-works">
//             <div class="step">
//             <div class="wrap-icon">
//             <div class="icon man"></div>
//             </div>
//             <div class="wrap-label">
//             <h6 class="label">1. Buyer choose<br> desired account</h6>
//             </div>
//             </div>
//             <div class="separator"></div>
//             <div class="step">
//             <div class="wrap-icon">
//             <div class="icon select-payment"></div>
//             </div>
//             <div class="wrap-label">
//             <h6 class="label">2. Buyer select<br> payment method</h6>
//             </div>
//             </div>
//             <div class="separator"></div>
//             <div class="step">
//             <div class="wrap-icon">
//             <div class="icon basket"></div>
//             </div>
//             <div class="wrap-label">
//             <h6 class="label">3. Eloboost24 proceed<br> the payment</h6>
//             </div>
//             </div>
//             <div class="separator"></div>
//             <div class="step">
//             <div class="wrap-icon">
//             <div class="icon folder"></div>
//             </div>
//             <div class="wrap-label">
//             <h6 class="label">4. Buyer receive account<br> informations and<br> confirms delivery</h6>
//             </div>
//             </div>
//             <div class="separator"></div>
//             <div class="step">
//             <div class="wrap-icon">
//             <div class="icon coin"></div>
//             </div>
//             <div class="wrap-label">
//             <h6 class="label">5. Seller Receive<br> money</h6>
//             </div>
//             </div>
//             </div>
//             </div>
//             <div class="wrap-big-note">
//             <div class="big-note">
//             <div class="note-name">
//             <h5 class="name">Buyers</h5>
//             </div>
//             <div class="note attach-readmore active" style="max-height: 500px;">
//             <p>
//             <strong>I.</strong> The General Terms and Conditions of Sale of the website, under the domain https://www.eloboost24.eu (hereinafter referred to “Eloboost24”), specify terms of use of the website by the Users &amp; Selling Users.
//             </p>
//             <p>
//             The administrator of the website (“The Service provider”) is:
//             </p>
//             <p>
//             Eloboost24 Group LTD<br>
//             Unit 4e Enterprise Court, Farfield Park<br>
//             S63 5DB - Rotherham<br>
//             United Kingdom<br>
//             </p>
//             <p>
//             The e-mail of the service provider is: support@eloboost24.eu<br><br>
//             Any proclamations of intent between the Users, Selling Users, and the Service Provider will be announced in electronic form, which means sending and delivering an e-mail to the e-mail address provided in the registration form.
//             </p>
//             <p>
//             <strong>II.</strong> Eloboost24 administrates and operate on the website designed for buying digital services, such as Boosting &amp; Coaching in a game called League of Legends (hereinafter referred to "LOL"), as well as Selling accounts of the game (League of Legends) offered by the Service &amp; Selling Users on this website or any sub-domains.
//             </p>
//             <p>
//             <strong>IV.</strong> Eloboost24 does not purchase any digital content, as well as League of Legends accounts, from the Sellers or Selling Users and does not re-sell them to Users.
//             </p>
//             <p>
//             Definitions:
//             </p>
//             <p>
//             <strong>Digital Goods</strong> - non-physical goods, created on the basis User individual choice or decision. Eloboost24 enables the following types of digital products: League of Legends accounts.
//             </p>
//             <p>
//             <strong>Selling Users</strong> - an entrepreneur or individual, who is not an entrepreneur, selling via the website system and being the owner of League of Legends accounts.
//             </p>
//             <p>
//             <strong>Website</strong> - site which is available under the link https://www.eloboost24.eu. No other website has a direct connection with EloBoost24.
//             </p>
//             <p>
//             <strong>Selling Account Marketplace</strong> - (hereinafter referred to “Selling Account”), is a virtual good, based on the subject where Service Provider &amp; Selling Users can sell League of Legends Accounts. We enable the ability to sell League of Legends accounts on all servers (North America, Europe West, Europe East &amp; Nordic, Brazil, Latin America, Russia, Turkey &amp; Oceania). Eloboost24 does not own League of Legends accounts. The accounts are provided by Selling Users.
//             </p>
//             <p>
//             <strong>3. Registration form, User account, Selling User account, Guest Account</strong>
//             </p>
//             <p>
//             <strong>3.4</strong> If the User wants to sell products through the website, he or she will be obligated to fill additional information located on his profile. The user will be compelled to provide the following details in “Edit Profile”: his or her current name and surname, select his or her withdrawal method and provide correct withdrawal information. Eloboost24 is not responsible for any damages or losses if the Selling User will provide false or incorrect information.
//             </p>
//             <p>
//             <strong>3.5</strong> Eloboost24 reserves the right to terminate or suspend the User’s account. If a User’s account will be suspended or removed and any balance that remains on the account, Eloboost24 can freeze or remove this balance due to breaching General Terms and Conditions of Sale of the Service Provider. More information about breach of General Terms and Conditions of Sale might be found in the following regulations at points 17, 17.1 and 17.2. Eloboost24 reserves the right to terminate or suspend the User’s account if the User creates situations that might be reflected as possible of violation of the company interest’s.
//             </p>
//             <p>
//             <strong>6. Purchases on the Website</strong>
//             </p>
//             <p>
//             <strong>6.1</strong> The Customer can purchase Virtual Services (Boosting &amp; Coaching) and Virtual Goods (Selling Account) through the website. The customer needs to accept the General Terms and Conditions of the eloboost24.eu website before the purchase.
//             </p>
//             <p>
//             <strong>6.2</strong> The Customer can purchase products listed above as a User (a registered member of the website - before he makes a purchase) or as a Guest (not a registered Member on the site - before he makes a purchase).
//             </p>
//             <p>
//             <strong>6.3</strong> If the Customer purchases the product as a Guest, the account will be created automatically by the Service Provider, and then will be delivered through electronic form to the customer, on the e-mail address provided by him or her during the process of purchase.
//             </p>
//             <p>
//             <strong>6.4</strong> The Customers are the persons, who want to purchase the following services and goods: acquisitions of levels in a virtual game called League of Legends, coaching in a game called League of Legends and accounts of the game League of Legends. The customer issues the product by uploading it on the website. The execution of the listed services and goods is made on the basis agreement between User and the Service Provider.
//             </p>
//             <p>
//             <strong>6.5</strong> If the Customer purchases a League of Legends account, he’s not obligated to provide any information. After the purchase, the Customer will receive in return the account credentials of the newly purchased account on the website.
//             </p>
//             <p>
//             <strong>6.7</strong> After the purchase of a Virtual Good (Selling Accounts), the customer is not obligated to provide any additional information. The customer will gain access to a specified area on his profile, where he will receive the account credentials of the purchased products.
//             </p>
//             <p>
//             <strong>7. Order Process, Customer, Service Provider and Selling User Obligations, Service Rights</strong>
//             </p>
//             <p>
//             <strong>7.1</strong> The agreement between the customer and Service Provider is valid until the Virtual Service (Boosting/Coaching) is delivered, or Virtual Good (Selling Account) is transferred to the new owner.
//             </p>
//             <p>
//             <strong>7.1.6</strong> If the customer purchased a LOL account, the agreement is valid until the account warranty period will expire.
//             </p>
//             <p>
//             <strong>7.2</strong> The agreement between the Customer and Service Provider, may be terminated by The Service Provider, if the customer doesn’t provide any actions by 120 days, such as: not providing sufficient information mentioned in points 6.5, 6.51, 6.52, 6.53, 6.54., not contacting with The Booster/Coach/Selling User for 120 days or more, pausing the Boost/Coaching for 120 days or more, not logging into his profile for 120 days or more.
//             </p>
//             <p>
//             <strong>7.2.1</strong> The agreement between the Customer and Service Provider, may be terminated by The Service Provider if the customer’s breach the following General Terms and Conditions of Sale of the Eloboost24.eu website.
//             </p>
//             <p>
//             <strong>7.2.2</strong> If the Service Provider terminates the agreement, unused credit will be deducted as an administration fee.
//             </p>
//             <p>
//             <strong>7.7</strong> If the customer purchases a LOL Account, he or she will be granted additional buyer protection.
//             </p>
//             <p>
//             <strong>7.7.1</strong> This warranty will take a specific amount of time, depending on the account type.
//             - the account without any label (Selling User) guarantees the 7-days basic warranty period<br>
//             - the account with the eloboost24 label (violet) or verified seller label (green) extend your warranty period to 14-days<br>
//             - the account with a customized label (yellow), apply two different warranty period, 14 days for the botted accounts and the lifetime period for the handmade accounts.<br><br>
//             The warranty will be applicable after the successful payment.
//             </p>
//             <p>
//             <strong>7.7.2</strong> The buyer can extend the warranty period to lifetime by paying 20% fixed fee based on the account price.
//             </p>
//             <p>
//             <strong>7.7.3</strong> The Service Provider is not liable for the usage of the account after the protection period expires.
//             </p>
//             <p>
//             <strong>7.9</strong> The Virtual Goods (League of Legends Account) transfer will be completed; once the Service Provider will deliver to the buyer valid account credentials and no complaint will be filled.
//             </p>
//             <p>
//             <strong>8. Additional Terms and Conditions of the Sales of Virtual Goods (League of Legends accounts), owned by Selling Users.</strong>
//             </p>
//             <p>
//             <strong>8.1</strong> The Service Provider reserves the right to provide the sale of Virtual Goods (League of Legends accounts).
//             </p>
//             <p>
//             <strong>8.2</strong> The Service Provider reserves the right to approve or disapprove requests of Virtual Good sales by the Selling User (League of Legends account)
//             </p>
//             <p>
//             <strong>8.2.1</strong> The Service Provider will inform the Selling User about the approval or disapproval through the e-mail connected to his Selling profile.
//             </p>
//             <p>
//             <strong>8.3</strong> The Service Provider reserves the right to approve or disapprove requests about editing information of the Virtual Good (League of Legends account) owned by the Selling User.
//             </p>
//             <p>
//             <strong>8.3.1</strong> The Service Provider will inform the Selling User about the approval or disapproval through the e-mail connected to his Selling profile.
//             </p>
//             <p>
//             <strong>8.4</strong> The Service provider reserves the right to input service fees on the account offered by the Selling Users on the website.
//             </p>
//             <p>
//             <strong>8.4.1</strong> The Service provider will apply the following fees:<br><br>
//             <strong>Selling User:</strong><br>
//             0 - 20 EUR/USD - 40%<br>
//             21 - 50 EUR/USD - 35%<br>
//             51 - 75 EUR/USD - 30%<br>
//             76-100 EUR/USD - 25%<br>
//             101-150 EUR/USD - 20%<br>
//             151-200 EUR/USD - 20%<br>
//             201 EUR/USD - 20%<br>
//             *the minimum applied fee is 4 EUR/USD<br><br>
//             <strong>Verified Sellers:</strong><br>
//             0 - 20 EUR/USD - 30%<br>
//             21 - 50 EUR/USD - 25%<br>
//             51 - 75 EUR/USD - 20%<br>
//             76-100 EUR/USD - 20%<br>
//             101-150 EUR/USD - 20%<br>
//             151-200 EUR/USD - 15%<br>
//             201 EUR/USD - 15%<br>
//             *the minimum applied fee is 4 EUR/USD<br><br>
//             <strong>Comfort sell fee:</strong><br>
//             0-20 EUR/USD - 0.99 EUR/USD<br>
//             21-100 EUR/USD - 1.49 EUR/USD<br>
//             101 - 200 EUR/USD - 2.49 EUR/USD<br>
//             201+ EUR/USD - 3.49 EUR/USD<br><br>
//             </p>
//             <p>
//             <strong>8.4.2</strong> The Service provider reserves the right to input higher service fees on the account offered by the Selling Users on the website.
//             </p>
//             <p>
//             <strong>8.5</strong> The Service provider reserves the right to remove the Virtual Good (League of Legends account) at any time while on sale.
//             </p>
//             <p>
//             <strong>8.6</strong> The Service provider reserves the right to freeze the amount of money paid to the Selling User (the same amount he wished to sell the account, excluding the addition fees) for seven days after the transaction was compromised.
//             </p>
//             <p>
//             <strong>8.7</strong> The Selling User is obliged to confirm that he complies with the Terms of Service, Seller Agreement and that he did not use the account for at least seven days, if the Selling User won’t fulfill the obligations or provide false information, the Service Provider reserve the right to freeze the money or file a claim to retrieve the money back.
//             </p>
//             <p>
//             <strong>8.8</strong> The Selling User has the right to withdraw the money after the freeze period expires.
//             </p>
//             <p>
//             <strong>8.9</strong> You, the Selling User accept that if you claim the account back after the Virtual Good (League of Legends account) was transferred to its new owner (customer), you are in direct breach of eloboost24.eu’s terms of use, and legally bound to either give the account back to the customer or pay back the same amount in addition to a fee determined by Eloboost24.eu, no less than 50 Euro and no more than three times the original amount if the order placed cost more than 50 Euro. Should you fail to abide by either option, you, the Selling User, accept full liability in a court of law as determined by the European Trade Laws.<br><br>
//             <strong>8.9.1</strong> You, the Selling User, accept that if you claim the account back after the Virtual Good (League of Legends account) was transferred to its new owner (customer), your bill will be sent to a debt collector agency and you also accept that you will have to pay the extra fees to cover both debt collectors agency and any other unforeseen costs because of your chargeback.
//             </p>
//             <p>
//             <strong>11. Refund and Chargeback Policy in Selling Accounts Sales</strong>
//             </p>
//             <p>
//             <strong>11.1</strong> You, the customer, accept that once you have purchased a Virtual Good (LOL account) and you received the account credentials of the purchased account, you are no longer eligible to receive a refund. If the account credentials are not valid, you have the right to store your unused credit. The Service Provider cannot terminate your remaining credit.
//             </p>
//             <p>
//             <strong>11.2</strong> You, the customer, accept that if you open a claim after the order has gone through or the service has started or been completed, you are in direct breach of eloboost24.eu's terms of use, and legally bound to either close the claim or pay back the same amount in addition to a fee determined by Eloboost24.eu, no less than 100 Euro and no more than three times the original amount if the order placed cost more than 100 Euro. Should you fail to abide by either option, you, the customer, accept full liability in a court of law as determined by the European Trade Laws.
//             </p>
//             <p>
//             <strong>11.3</strong> The customer is eligible to request a refund for a Virtual Good (LOL Account) within 48 hours after the purchase, this applies to situations where the Service Provider hasn't provided the account credentials of the purchased account. The Customer can issue a refund by submitting an inquiry in the contact form or contacting us through the live chat.
//             </p>
//             <p>
//             <strong>11.3.1</strong> You, the customer, accept that if you request a refund, the administration fee on the amount of 25% of the total amount of the Service will be applied.
//             </p>
//             <p>
//             <strong>11.3.2</strong> You, the customer, accept that if you request a refund, the Service Provider will transfer the payment provider fee to your responsibility.
//             </p>
//             <p>
//             <strong>11.3.3</strong> After the Customer requests a refund; the Service Provider proceeds the following refund within 14 days after submitting the request.
//             </p>
//             <p>
//             <strong>11.4</strong> The customer is eligible to request a refund for a Virtual Good (LOL Account) after 14 days from the date of the purchase, this applies to situations when the Service Provider hasn’t provided the account credentials. The Customer can issue a refund by submitting an inquiry in the contact form or contacting us through the live chat.
//             </p>
//             <p>
//             <strong>11.4.1</strong> You, the customer, accept that if you request a refund, the administration fee won’t be applied.
//             </p>
//             <p>
//             <strong>11.4.2</strong> You, the customer, accept that if you request a refund, the Service Provider will transfer the payment provider fee to your responsibility.
//             </p>
//             <p>
//             <strong>11.4.3</strong> After the Customer requests a refund; The Service Provider proceeds the following refund within 14 days after submitting the request.
//             </p>
//             <p>
//             <strong>11.5</strong> In specific cases not listed above, The Service Provider reserves the right to proceed a refund or a partial refund. All those refunds will be an exclusive discretion of the site management.
//             </p>
//             <p>
//             <strong>11.5.1</strong> You, The Customer, accept that in those specific cases, the administration fee on the amount 10% of the total amount of the Service will be applied.
//             </p>
//             <p>
//             <strong>11.5.2</strong> You, The Customer, accept that in those specific cases, the Service Provider will transfer the payment provider fee to your responsibility.
//             </p>
//             <p>
//             <strong>11.5.3</strong> You, The Customer, accept that in those specific cases, the Service Provider proceeds the following refund within 14 days after submitting the request.
//             </p>
//             <p>
//             <strong>11.6</strong> You, the customer, accept that if you claim a chargeback of a payment for a good that has been completed, your bill will be sent to a debt collector agency, and you also accept that you will have to pay the extra fees to cover both debt collectors agency and any other unforeseen costs because of your chargeback.
//             </p>
//             <p>
//             <strong>13. Payments</strong>
//             </p>
//             <p>
//             <strong>13.1</strong> You can pay for the services using the following methods: G2A, Skrill, Paysera.
//             </p>
//             <p>
//             <strong>13.2</strong> All the payment fees are on the Service Provider.
//             </p>
//             <p>
//             <strong>13.3</strong> The Service Provider is not responsible for failed or rejected from the Payment Provider payments.
//             </p>
//             <p>
//             <strong>14. Complain</strong>
//             </p>
//             <p>
//             <strong>14.1</strong> The customer has the right to complain about the service he purchased.
//             </p>
//             <p>
//             <strong>14.2</strong> The customer can file a complaint if the service is not provided or wasn't provided as described.
//             </p>
//             <p>
//             <strong>14.3</strong> If the customer wants to file a complaint, he should follow the following steps:
//             <br>
//             <strong>14.3.1</strong> Go to the website
//             <br>
//             <strong>14.3.2</strong> Go to the “Contact Us” Tab.
//             <br>
//             <strong>14.3.3</strong> Submit an inquiry with the subject ”Complain”, describing what was wrong.
//             </p>
//             <p>
//             <strong>14.4</strong> All complaints will be answered within 14 days, after the date of receiving the complaint.
//             </p>
//             <p>
//             <strong>14.5</strong> If we don’t resolve the complaint, it doesn’t mean that we agreed with the customer.
//             </p>
//             <p>
//             <strong>17. Termination of Using the Website</strong>
//             </p>
//             <p>
//             <strong>17.1</strong> The Service Provider may terminate your usage of the website without notifying you, if you make an Illegal usage of the Website.
//             </p>
//             <p>
//             <strong>17.2</strong> The Service Provider might especially terminate your usage of the website if:<br>
//             - you breach the General Terms and Conditions of Sale of the eloboost24.eu,<br>
//             - you upload illegal Data,<br>
//             - you release Personal Data of other Users,<br>
//             - you violate the terms of use of the Account,<br>
//             - user activity might be reflected as possible of violation of the company interest’s.
//             </p>
//             <p>
//             If you want to know more specific informations, check our Terms of Service here.
//             </p>
//             <button class="read-more-btn btn-active">Show More</button></div>
//             </div>
//             </div>
//             </div>
//             </div>
//             </section>



//         )
//     }

// }

// LolAccount.propTypes = {

// };

// const mapStatetoProps = ({ auth }) => ({
//     user: auth.user
// })
// const mapDispatchToProps = ({
 
// })
// export default connect(mapStatetoProps, mapDispatchToProps)(LolAccount);