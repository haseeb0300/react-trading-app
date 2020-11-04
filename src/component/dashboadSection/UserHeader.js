import React from "react";


function PaymentComponent(props) {
    return (

        <section className="ps-header-user">
            <div className="st-inner">
                <div className="st-cnt">
                    <div className="pt-user-backend-header gift-box">
                        <div className="inner">
                            <div className="cnt-cols">
                                <div className="col-left">
                                    <div className="avatar">
                                        <div className="wrap-image">
                                            <img alt="eloboost24.eu" src="https://eloboost24.eu/images/temp/user_profile_avatar.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-right">
                                    <div className="part-details">
                                        <div className="col-details-user">
                                            <div className="wrap-name">
                                                <h2 className="name">usamahussain043</h2>
                                            </div>
                                            <ul className="list-info">
                                                <li className="item">
                                                    <div class="cnt">
                                                        <a href="https://discord.gg/CzApc23">Discord</a>
                                                    </div>
                                                </li>
                                                <li className="item">
                                                    <div class="cnt">0 Eloboost24 points</div>
                                                </li>
                                            </ul>
                                            <ul className="list-info-extra">
                                                <li className="item">
                                                    <div className="cnt">
                                                        <a href="https://discord.gg/CzApc23">Connect your profile</a>
                                                    </div>
                                                </li>
                                                <li className="item">
                                                    <div className="cnt">
                                                        <a href="https://discord.gg/CzApc23">Connect your profile</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>


                                    </div>

                                    <div className="part-manu">
                                        <div className="wrap-menu">
                                            <ul className="menu">
                                                <li className="item">
                                                        <span className="text">MARKETPLACE</span>
                                                </li>
                                                <li className="item">
                                                        <span className="text">ORDER HISTORY</span>
                                                </li>
                                                <li className="item">
                                                        <span className="text">REQUEST WITHDRAW</span>
                                                </li>
                                                <li className="item">
                                                        <span className="text">EDIT PROFILE</span>
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
        </section>
    );
}
PaymentComponent.propTypes = {};

export default PaymentComponent;