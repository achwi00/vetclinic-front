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
                    body: uMail,// Include the session cookie (JSESSIONID)
                });

                if (roleResponse.ok) {
                    const roleData = await roleResponse.text();
                    setUser({ email: uMail, role: roleData.role }); // Store email and role in the context
                    navigate('/dashboard/home'); // Navigate to the dashboard
                } else {
                    console.error("Failed to fetch user role");
                }
                //.............

                //navigate('/dashboard/home');// Navigate to the dashboard
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