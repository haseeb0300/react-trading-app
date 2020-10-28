import React, { useState } from "react";
import { Link, withRouter } from 'react-router-dom';



function SectionAcountFilter(props) {
    //const { t, i18n } = this.props
    return (

        <section class="search-filter wow fadeInUp" data-wow-delay="0.6s" >
            <div class="container" >
                <div class="row" >
                    <div class="col-md-12" >
                        <ul class="nav nav-pills nav-fill" >
                            <li class="nav-item" >
                                <Link to="/lolaccount" >
                                    <a class={props.page == 'lolAccount'?"nav-link active":"nav-link"}
                                        href="" > LOL ACCOUNTS </a> </Link> </li> <li class="nav-item" >
                                <Link to="/unrankedaccount" >
                                    <a class={props.page == 'unrankedAccount'?"nav-link active":"nav-link"}
                                        href="" > UNRANKED ACCOUNTS </a> </Link> </li> <li class="nav-item" >
                                <Link to="/customizedaccount" >
                                    <a class={props.page == 'customizeAccount'?"nav-link active":"nav-link"}
                                        href="" > CUSTOMIZED ACCOUNTS </a> </Link> </li> </ul>
                        <div class="card" >
                            <div class="card-body" >
                                <form >
                                    <div class="form-row" >
                                        <div class="form-group col-sm-6 col-lg-2" >
                                            <label > SERVER </label> <select class="form-control" >
                                                <option > All </option>
                                                <option > 1 </option>
                                                <option > 2 </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-sm-6 col-lg-2" >
                                            <label > TIERS </label>
                                            <select class="form-control" >
                                                <option > All </option>
                                                <option > 1 </option> <option >
                                                    2 </option> </select>
                                        </div>
                                        <div class="form-group col-sm-6 col-lg-2" >
                                            <label > SPECIAL INFORMATIONS </label>
                                            <select class="form-control" >
                                                <option > None </option>
                                                <option > 1 </option>
                                                <option > 2 </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-sm-6 col-lg-2" >
                                            <label > EXPERT PICK </label>
                                            <select class="form-control" >
                                                <option > All </option>
                                                <option > 1 </option>
                                                <option > 2 </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-sm-6 col-lg-2" >
                                            <label > HANDMADE / BOTTED </label>
                                            <select class="form-control" >
                                                <option > None </option>
                                                <option > 1 </option>
                                                <option > 2 </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-sm-6 col-lg-2" >
                                            <label > DISCOUNTED </label>
                                            <select class="form-control" >
                                                <option > All </option>
                                                <option > 1 </option>
                                                <option > 2 </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-sm-6 col-lg-2" >
                                            <label > LOL ACCOUNTS </label>
                                            <select class="form-control" >
                                                <option > All </option>
                                                <option > 1 </option>
                                                <option > 2 </option>
                                            </select>
                                        </div>
                                        <div class="form-group col-sm-6 col-lg-2" >
                                            <label > TYPE OF QUEUE </label>
                                            <select class="form-control" >
                                                <option > None </option>
                                                <option > 1 </option>
                                                <option > 2 </option>
                                            </select>
                                        </div>
                                        <div class="col-md-4" >
                                            <div class="slider-box" >
                                                <label for="priceRange" > Price Range: </label>
                                                <div id="price-range" class="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" >
                                                    <div class="ui-slider-range ui-widget-header ui-corner-all" style={{ width: "100%", left: "0%" }} >
                                                    </div>
                                                    <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style={{ left: "0%" }} >
                                                    </span> <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style={{ left: "0%" }} >
                                                    </span>
                                                </div>
                                                <input type="text" id="priceRange" readonly />
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
SectionAcountFilter.propTypes = {};

export default (SectionAcountFilter);