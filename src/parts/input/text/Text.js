import React, { Component } from 'react';
import './Text.scss';

class Text extends Component {
  
  handleOnChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }

  render() {
    return (
        <input
          type="text"
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.handleOnChange.bind(this)} />
    );
  }
}

export default Text;
