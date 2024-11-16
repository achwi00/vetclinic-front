import React, {useState} from "react";
import IconDisplayer from "./IconDisplayer";
import { useNavigate } from 'react-router-dom';
import '../../src/styles/login-register.css'

function Form({ fields, onSubmitEndpoint, inputStyle, buttonMsg, buttonClass, styleClass }){
    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    );
    const navigate = useNavigate();

    // Handle change in any input field
    const handleChange = (e, fieldName) => {
        const newFormData = {
            ...formData,
            [fieldName]: e.target.value,
        };
        // console.log("Updated formData:", newFormData);
        setFormData(newFormData);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        console.log("mail:" , formData.email)
        e.preventDefault();
        const urlEncodedData = new URLSearchParams({
            username: formData.email,  // Map email to 'username'
            password: formData.password, // Keep 'password' as is
        }).toString();
        // Make a POST request to the endpoint with form data
        try {
            // console.log(formData.email)
            const response = await fetch(onSubmitEndpoint, {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Credentials': 'true',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: urlEncodedData,
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
       <div className={styleClass}>
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