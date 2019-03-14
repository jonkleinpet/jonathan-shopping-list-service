import React, { Component } from 'react';
import ValidateName from './ValidateName';

export default class Form extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        hasError: false,
        name: '',
        message: ''
      }
  }

  nameValidation(name) {
    let hasError = false;
    let message = this.state.message;
    name = name.trim();

    if (name.length === 0) {
      hasError = true;
      message = 'Provide a Name please'

    } else if ((/[!@#$%^&*(),.?":{}<>]/g).test(name)) {
      hasError = true;
      message = 'search can only include letters';

    } else {
      message = '';
      hasError = false;
    }

    this.setState({ hasError: hasError, message: message })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const getData = this.props.getData;
    getData(this.state.name);
  }

  updateInput = (e) => {
    const name = e.target.value;
    this.setState({name}, this.nameValidation(name))

  }

  render() {
    console.log(this.props.getData)
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          <input onChange={ (e) => this.updateInput(e) } type='text' placeholder='Han Solo'></input>
        </label>
        <button type="submit" disabled={ this.state.hasError }>Submit</button>
        <ValidateName hasError={ this.state.hasError } message={ this.state.message } />
      </form>
    )
  }
}