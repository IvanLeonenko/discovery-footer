import React, { Component } from 'react';
import Stack from '../../containers/Stack';
import ActionButton from '../../parts/input/actionButton/ActionButton';
import Text from '../../parts/input/text/Text';
import ErrorMessage from '../../parts/text/error/ErrorMessage';
import DefaultTitle from '../../parts/text/defaultTitle/DefaultTitle';
import './NamesForm.scss';

class NamesForm extends Component {
    
  constructor(props) {
    super(props);
    this.state = { firstName: '', lastName: '', error: '' };
  }

  getError = () => {
    let error = this.state.firstName ? '' : 'First Name field: Required';
    return error || (this.state.lastName ? '' : 'Last Name field: Required');
  }

  updateError = () => {
    if (this.state.error) {
      const error = this.getError();
      this.setState({ error });
    }
}

  handleFirstNameInput = (firstName) => {
    this.setState({ firstName }, this.updateError);
  }

  handleLastNameInput = (lastName) => {
    this.setState({ lastName }, this.updateError);
  }

  handleSubmit = () => {
    const error = this.getError();
    if (error) {
      this.setState({ error });
      return;
    }

    if (this.props.onSubmit) {
        this.props.onSubmit({ firstName: this.state.firstName, lastName: this.state.lastName })
    }
  }

  render() {
    return (
        <Stack className="namesForm">
            <DefaultTitle title={this.props.title} />
            <Stack orientation="horizontal">
              <Text value={this.state.firstName} onChange={this.handleFirstNameInput.bind(this)} placeholder="First Name"/>
              <Text value={this.state.lastName} onChange={this.handleLastNameInput.bind(this)} placeholder="Last Name" />
              <ActionButton buttonText={this.props.buttonText} onClick={this.handleSubmit.bind(this)} />
            </Stack>
            <ErrorMessage error={this.state.error} />
        </Stack>
    );
  }
}

export default NamesForm;
