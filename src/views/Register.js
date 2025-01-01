import React from "react";
import '../../src/styles/login-register.css'
import Form from "../component/Form";

function Register(){
    const formFields = [
        { name: 'name', placeholder:'name', type: 'text', required: true },
        { name: 'surname', placeholder:'surname', type: 'text', required: true },
        { name: 'email', placeholder:'email', type: 'email', required: true },
        { name: 'password', placeholder:'password', type: 'password', required: true },
    ]
    return(
        <div className="all-holder">
            <div className="log-register-containers left-register">
                <Form
                    fields={formFields}
                    styleClass="formsHolder formsHolderRegister"
                    onSubmitEndpoint={"#"}
                    inputStyle="formInputs credentials"
                    buttonMsg="register"
                    buttonClass="formInputs form-btn"
                    showIcon={true}
                    type="register"
                />
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