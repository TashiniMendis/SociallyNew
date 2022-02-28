import React, { useState } from "react";
import Register from "./Register";
//import './SignIn.css';
import OTP from './OTP';
import { Navigate } from 'react-router-dom';

const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
      {!formIsSubmitted ? (
        <Register submitForm={submitForm} />
      ) : (
        <Navigate to="/otp"/>
      )}
    </div>
  );
};

export default Form;
