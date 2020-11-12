import React, { useState, useRef } from "react";
import { Link, withRouter } from 'react-router-dom';
import { Widget } from "@uploadcare/react-widget";



function uploadbtn(props) {
    const widgetApi = useRef();
    return (

        <div class="col-md-4 ">
            <label>Photos</label>
            <Widget multiple multipleMax={3} ref={widgetApi} onFileSelect={(group) => {
                    console.log(group)
                    group.files().forEach(file => {
                        file.done((obj) => { 
                            
                        props.onUploadImage(obj) 
                        console.log(obj) })
                    });
                }

            } publicKey="demopublickey"
            //  onFileSelect={(e) => {
            //     console.log(e);
            //     e.done((file) =>
            //     {
            //     //props.onUploadImage(file)     
            //     console.log(file)
            //     }
            //     );
            //   }}
            //   onDialogClose={(e=>console.log(e))}
            />
        </div>

    );
}
uploadbtn.propTypes = {};

export default uploadbtn;