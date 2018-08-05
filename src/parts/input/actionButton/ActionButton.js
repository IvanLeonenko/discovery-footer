import React, { Component } from 'react';
import './ActionButton.scss';

class ActionButton extends Component {
  
  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return (
        <input
          type="submit"
          className="actionButton"
          value={this.props.buttonText ? this.props.buttonText : 'submit'}
          onClick={this.handleClick.bind(this)} />
    );
  }
}

export default ActionButton;
