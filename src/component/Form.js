import React, { useState } from "react";
import IconDisplayer from "./IconDisplayer";

function Form({ fields, onFormSubmit, inputStyle, buttonMsg, buttonClass, styleClass, showIcon, type }) {
    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    );

    // Handle change in any input field
    const handleChange = (e, fieldName) => {
        const newFormData = {
            ...formData,
            [fieldName]: e.target.value,
        };
        setFormData(newFormData);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData); // Pass form data to the parent component
    };

    return (
        <div className={styleClass}>
            {showIcon && <IconDisplayer iconName="cat" styleClass="forms-icon" />}
            <form onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                    <div key={index} className="form-group">
                        <label>{field.label}</label>
                        {field.options ? (
                            // Render a dropdown for fields with options
                            <select
                                className={inputStyle}
                                name={field.name}
                                value={formData[field.name] || ''}
                                onChange={(e) => handleChange(e, field.name)}
                                required={field.required || false}
                            >
                                <option value="" disabled>{field.placeholder}</option>
                                {field.options.map((option, i) => (
                                    <option key={i} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            // Render an input for regular fields
                            <input
                                type={field.type}
                                className={inputStyle}
                                name={field.name}
                                placeholder={field.placeholder}
                                dataplaceholder={field.dataplaceholder}
                                value={formData[field.name] || ''}
                                onChange={(e) => handleChange(e, field.name)}
                                required={field.required || false}
                            />
                        )}
                    </div>
                ))}
                <button type="submit" className={buttonClass}>{buttonMsg}</button>
            </form>
            {type === "log" &&
                <div className={"log-register-message-holder"}>
                    <p>New user?&nbsp;</p><a href={"/register"}>Sign up.</a>
                </div>
            }
            {type === "register" &&
                <div className={"log-register-message-holder"}>
                    <p>Already a user?&nbsp;</p><a href={"/login"}>Log in.</a>
                </div>
            }
        </div>
    );
}

export default Form;
