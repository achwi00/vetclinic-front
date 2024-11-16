import React from "react";
import '../../src/styles/login-register.css'
import Form from "../component/Form";

function Login(){
    // const handleLogin = async (formData) => {
    //     const { email, password } = formData; // Extract email and password
    //     try {
    //         console.log('email: ', email, " password: ", password)
    //         const response = await fetch('http://localhost:8080/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ email, password }),
    //         });
    //
    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log('Login successful:', data);
    //         } else {
    //             console.error('Login failed');
    //         }
    //     } catch (error) {
    //         console.error('An error occurred:', error);
    //     }
    // };
    const formFields = [
        { name: 'email', placeholder:'email', type: 'email', required: true },
        { name: 'password', placeholder:'password', type: 'password', required: true },
    ]
    return(
        <div className="all-holder">
            <div className="log-register-containers left-log">
                <div className="centring-log-register in-between">
                    <div className="log-register-info">
                        <h1>Log in.</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="paw-holder">
                        <img src={"../imgs/paw.png"} alt={"paw"}/>
                    </div>
                </div>
            </div>
            <div className="log-register-containers right-log">
                <Form
                    fields={formFields}
                    onSubmitEndpoint={'http://localhost:8080/login'}
                    styleClass="formsHolder"
                    inputStyle="formInputs credentials"
                    buttonMsg="log in"
                    buttonClass="formInputs form-btn"
                />
            </div>
        </div>
    );
}
export default Login;