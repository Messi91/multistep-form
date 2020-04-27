import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';

class MainForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    city: '',
    country: ''
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  handleChange = input => event => {
    this.setState({ [input]: event.target.value })
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, age, city, country } = this.state;
    const values = { firstName, lastName, email, age, city, country };

    switch (step) {
      case 1:
        return (
          <UserDetails
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
          />
        )
      case 2:
        return (
          <PersonalDetails
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
          />
        )
      case 3:
        return (
          <Confirmation
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          values={values}
          />
        )
      case 4:
        return (
          <Success />
        )
    }
  }
}

export default MainForm;
