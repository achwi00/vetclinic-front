import React from "react";
import '../../src/styles/login-register.css'

function Register(){
    return(
        <div className="all-holder">
            <div className="log-register-containers left-register">

            </div>
            <div className="log-register-containers right-register">
                <div className="centring-log-register in-between">
                    <div className="paw-register">
                        <img src={"../imgs/paw-top.png"} alt={"paw"}/>
                    </div>
                    <div className="log-register-info">
                        <h1>Register.</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;