import React, { Component } from 'react';
import Stack from '../../containers/Stack';
import ActionButton from '../../parts/input/actionButton/ActionButton';
import EmailInput from '../../parts/input/emailInput/EmailInput';
import ErrorMessage from '../../parts/text/error/ErrorMessage';
import DefaultTitle from '../../parts/text/defaultTitle/DefaultTitle';
import Checkbox from '../../parts/input/checkbox/Checkbox';
import Link from '../../parts/text/link/Link';
import './EmailForm.scss';


class EmailForm extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        error: '',
        termsAccepted: false,
    };
  }

  getError = () => {
    let error = this.state.isEmailValid ? '' : 'Email Address field: Required and must be valid email';
    return error || (this.state.termsAccepted ? '' : 'Please accept terms and conditions');
  }

  updateError = () => {
    if (this.state.error) {
      const error = this.getError();
      this.setState({ error });
    }
}

  handleEmailInput = (e) => {
    this.setState({ isEmailValid: e.isValid, email: e.value }, this.updateError);
  }

  handleSubmit = () => {
    const error = this.getError();
    if (error) {
      this.setState({ error });
      return;
    }

    if (this.props.onSubmit) {
        this.props.onSubmit({ email: this.state.email })
    }
  }

  handleTerms = (e) => {
    this.setState({ termsAccepted: e.checked }, this.updateError);
  }

  render() {
    return (
        <Stack className="emailForm">
            <DefaultTitle title={this.props.title} />
            <Stack orientation="horizontal">
              <EmailInput onChange={this.handleEmailInput.bind(this)} />
              <ActionButton buttonText={this.props.buttonText} onClick={this.handleSubmit.bind(this)} />
            </Stack>
            <ErrorMessage error={this.state.error} />
            <Checkbox onChange={this.handleTerms.bind(this)}>I agree to receive information from Discovery Communications in accordance with the following 
                &nbsp;<Link link="https://corporate.discovery.com/privacy-policy" text="Privacy Policy" />
            </Checkbox>
        </Stack>
    );
  }
}

export default EmailForm;
