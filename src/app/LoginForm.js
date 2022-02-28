import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
//import './SignIn.css';

const LoginForm = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
      {!formIsSubmitted ? <Login submitForm={submitForm} /> : <Dashboard />}
    </div>
  );
};

export default LoginForm;
