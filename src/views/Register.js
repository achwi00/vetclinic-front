import React, {useState} from "react";
import '../../src/styles/login-register.css'
import Form from "../component/Form";

function Register(){
    const [view, setView] = useState("form");
    const [message, setMessage] = useState(null); // For success/error messages
    const formFields = [
        { name: 'name', placeholder:'name', type: 'text', required: true },
        { name: 'surname', placeholder:'surname', type: 'text', required: true },
        { name: 'email', placeholder:'email', type: 'email', required: true },
        { name: 'password', placeholder:'password', type: 'password', required: true },
    ]
    const handleRegister = async (formData) => {
        try {
            const response = await fetch("http://localhost:8080/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.text();
                setMessage({ type: "success", text: "Registration successful." });
                console.log("Response from server:", data);
            } else {
                const errorData = await response.text();
                setMessage({ type: "error", text: errorData.message || "Registration failed." });
                console.error("Error response from server:", errorData);
            }
        } catch (error) {
            setMessage({ type: "error", text: "An error occurred. Please try again." });
            console.error("Error during registration:", error);
        }
        finally {
            setView("message");
        }
    }
    return(
        <div className="all-holder">
            <div className="log-register-containers left-register">
                {view === "form" &&
                    <Form
                        fields={formFields}
                        styleClass="formsHolder formsHolderRegister"
                        onFormSubmit={handleRegister}
                        inputStyle="formInputs credentials"
                        buttonMsg="register"
                        buttonClass="formInputs form-btn"
                        showIcon={true}
                        type="register"
                    />
                }
                {view==="message" && (
                    <div className={"messageHolder"}>
                        <h1>{message.text}</h1>
                        {message.type ==="success" &&
                            <p>Log in to Your account <a href={"/login"}>here.</a></p>
                        }
                        {message.type ==="error" &&
                            <p>Please retry <a href={"/register"}>here.</a> </p>
                        }
                    </div>
                )}
            </div>
            <div className="log-register-containers right-register">
                <div className="centring-log-register in-between">
                    <div className="paw-register">
                        <img src={"../imgs/paw-top.png"} alt={"paw"}/>
                    </div>
                    <div className="log-register-info">
                        <h1>Register.</h1>
                        <p>Create an account and start using our app.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;