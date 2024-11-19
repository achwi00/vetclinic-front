import React from "react";
import '../../src/styles/login-register.css';
import Form from "../component/Form";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const formFields = [
        { name: 'email', placeholder: 'email', type: 'email', required: true },
        { name: 'password', placeholder: 'password', type: 'password', required: true },
    ];

    const handleFormSubmit = async (formData) => {
        console.log("Submitted data:", formData);

        const urlEncodedData = new URLSearchParams({
            username: formData.email, // Map email to 'username'
            password: formData.password, // Keep 'password' as is
        }).toString();

        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: urlEncodedData,
            });

            if (response.ok) {
                navigate('/dashboard/home'); // Navigate to the dashboard
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className="all-holder">
            <div className="log-register-containers left-log">
                <div className="centring-log-register in-between">
                    <div className="log-register-info">
                        <h1>Log in.</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="paw-holder">
                        <img src={"../imgs/paw.png"} alt={"paw"} />
                    </div>
                </div>
            </div>
            <div className="log-register-containers right-log">
                <Form
                    fields={formFields}
                    onFormSubmit={handleFormSubmit} // Pass the form submit handler
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
