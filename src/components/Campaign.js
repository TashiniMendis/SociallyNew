import React, { Component } from 'react';
import CampForm from './CampForm';
//import UserDetails from "./UserDetails";
//import AddressDetails from "./AddressDetails";
//import Confirmation from "./Confirmation";

class Campaign extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip:'',
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        const { step, firstName, lastName, email, address, city, state, zip } = this.state;
        const inputValues = { firstName, lastName, email, address, city, state, zip };
        switch(step) {
        case 1:
            return <CampForm
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    inputValues={inputValues}
                    />
                }
            }
        }
        
        export default Campaign;
