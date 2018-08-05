import React, { Component } from 'react';
import Congrats from '../congrats/Congrats';
import EmailForm from '../email/EmailForm';
import NamesForm from '../names/NamesForm';
import FunkyText from '../../parts/text/funkyText/FunkyText';
import { steps, stepNames } from './FooterData.js';
import './Footer.scss';

class Footer extends Component {
    
  constructor(props) {
    super(props);
    this.state = { currentStep: 0 };
    Object.assign(this.state, steps[0]);
  }

  setNextStep = (formData) => {
    const nextStep = Math.min(this.state.currentStep + 1, steps.length - 1);
    this.setState({
        currentStep: nextStep,
        ...steps[nextStep],
        ...formData
    }, this.sendData);
  }

  handleNext = (formData) => {
    this.setNextStep(formData);
  }

  sendData = () => {
    if (this.state.email && this.state.firstName && this.state.lastName) {
        console.log('====SENDING DATA====', { email: this.state.email, firstName: this.state.firstName, lastName: this.state.lastName });
    }
  }

  getFormForStep = () => {
      switch(this.state.currentStep) {
          case stepNames.FULLNAME:
            return <NamesForm {...steps[stepNames.FULLNAME]} buttonText="SIGN UP" onSubmit={this.handleNext.bind(this)} />;
          case stepNames.SUBSCRIBED:
            return <Congrats {...steps[stepNames.SUBSCRIBED]} />;
          default :
            return <EmailForm {...steps[stepNames.INITIAL]} buttonText="NEXT" onSubmit={this.handleNext.bind(this)} />;
      }
  }

  render() {
    return (
      <footer className="Footer">
        <div className="container">
            <div className="leftColumn">
                <FunkyText text={this.state.ctaText}/>
            </div>
            <div className="rightColumn">
                {this.getFormForStep()}
            </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
