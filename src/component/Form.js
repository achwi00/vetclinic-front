import React, { useState } from "react";
import IconDisplayer from "./IconDisplayer";

function Form({ fields, onFormSubmit, inputStyle, buttonMsg, buttonClass, styleClass }) {
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
            <IconDisplayer iconName="cat" styleClass="forms-icon" />
            <form onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                    <div key={index} className="form-group">
                        <label>{field.label}</label>
                        <input
                            type={field.type}
                            className={inputStyle}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ''}
                            onChange={(e) => handleChange(e, field.name)}
                            required={field.required || false}
                        />
                    </div>
                ))}
                <button type="submit" className={buttonClass}>{buttonMsg}</button>
            </form>
        </div>
    );
}

export default Form;
