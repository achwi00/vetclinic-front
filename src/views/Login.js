import React, {useContext} from "react";
import '../../src/styles/login-register.css';
import Form from "../component/Form";
import { UserContext } from "../UserContext";
import { useNavigate } from 'react-router-dom';

function Login() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const formFields = [
        { name: 'email', placeholder: 'email', type: 'email', required: true },
        { name: 'password', placeholder: 'password', type: 'password', required: true },
    ];

    const handleFormSubmit = async (formData) => {
        const uMail = formData.email;
        console.log("Submitted mail:", uMail);

        const urlEncodedData = new URLSearchParams({
            username: formData.email,
            password: formData.password,
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

                //.............
                const roleResponse = await fetch('http://localhost:8080/role', {
                    method: 'POST',
                    credentials: 'include',
                    body: uMail,
                });

                if (roleResponse.ok) {
                    const roleData = await roleResponse.text();
                    console.log(roleData);
                    setUser({ email: uMail, role: roleData});
                    navigate('/dashboard/home');
                } else {
                    console.error("Failed to fetch user role");
                }
                //.............

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
                        <p>Log in into your account.</p>
                    </div>
                    <div className="paw-holder">
                        <img src={"../imgs/paw.png"} alt={"paw"} />
                    </div>
                </div>
            </div>
            <div className="log-register-containers right-log">
                <Form
                    fields={formFields}
                    onFormSubmit={handleFormSubmit}
                    styleClass="formsHolder"
                    inputStyle="formInputs credentials"
                    buttonMsg="log in"
                    buttonClass="formInputs form-btn"
                    showIcon={true}
                    type="log"
                />
            </div>
        </div>
    );
}

export default Login;