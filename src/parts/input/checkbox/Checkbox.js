import React, { Component } from 'react';
import './Checkbox.scss';

class Checkbox extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        checked: false
    }
  }

  notifySubscribers = () => {
    if (this.props.onChange) {
      this.props.onChange({ checked: this.state.checked });
    }
  }

  handleInputChange = (e) => {
    this.setState({ checked: e.target.checked }, this.notifySubscribers)
  }

  onCheckboxLabelClick = () => {
    this.setState({ checked: !this.state.checked }, this.notifySubscribers);
  }

  render() {
    return (
      <div className="checkboxContainer">
        <label>
            <input type="checkbox" checked={this.state.checked} onClick={this.handleInputChange.bind(this)} />
            <span></span>
        </label>
        <span className="label" onClick={this.onCheckboxLabelClick.bind(this)} >&nbsp;&nbsp;{this.props.children}</span>
    </div>
    );
  }
}

export default Checkbox;
