import React, { useState,useRef } from "react";
import { Link, withRouter } from 'react-router-dom';
import { Widget } from "@uploadcare/react-widget";



function uploadbtn(props) {
    const widgetApi = useRef();
    return (

        <div class="col-md-4 ">
            <label>Photos</label>
            <Widget ref={widgetApi} publicKey="ae004e3a59fcced0dc17" />
        </div>

    );
}
uploadbtn.propTypes = {};

export default uploadbtn;