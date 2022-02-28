const validation = (values) =>{
    let errors={};

    if(!values.name){
        errors.name="Name is required"
    }
    if(!values.email){
        errors.email="Email is required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'Invalid email address';
    }
    if(!values.password){
        errors.password="Password is required"
    }
    else if(values.password.length <6){
        errors.password="Password must be more than six characters"
    }
    else if(values.password.length >10){
        errors.password="Password must be less than ten characters"
    }
    if(!values.confirmPassword){
        errors.confirmPassword="Re-entering Password is required"
    }
    else if(values.password !== values.confirmPassword ){
        errors.confirmPassword="Password doesn't match"
    }
    return errors;
};

export default validation;