import React, {useState} from "react";
import IconDisplayer from "./IconDisplayer";
import { useNavigate } from 'react-router-dom';
import '../../src/styles/login-register.css'

function Form({ fields, onSubmitEndpoint, inputStyle, buttonMsg, buttonClass }){
    // State to manage form data
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    // Handle change in any input field
    const handleChange = (e, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Make a POST request to the endpoint with form data
        try {
            const response = await fetch(onSubmitEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // If successful, navigate to a success or next page
                navigate('/success'); // Or redirect to any other route
            } else {
                // Handle errors (for example, set an error state)
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

   return(
       <div className="formsHolder">
            <IconDisplayer
                iconName="cat"
                styleClass="forms-icon"
            />
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