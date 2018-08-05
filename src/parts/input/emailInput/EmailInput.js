import React, { Component } from 'react';
import Text from '../text/Text'
import './EmailInput.scss';

class EmailInput extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        email: ''
    }
  }
  
  /**
  * Simple validation: user@domain.domain
  */
  validateEmail = (email) => {
    return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
  }

  handleEmailInput = (value) => {
    this.setState({ email: value })
    if (this.props.onChange) {
        this.props.onChange({ isValid: this.validateEmail(value), value: value });
    }
  }

  render() {
    return (
        <Text value={this.state.email} onChange={this.handleEmailInput.bind(this)}  placeholder="enter email address" />
    );
  }
}

export default EmailInput;
