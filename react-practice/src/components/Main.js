import React, { Component } from 'react';
import List from './List';
import Form from './Form';


export default class Main extends Component {

  render() {
    console.log(this.props)
    const { results } = this.props.props
    return (
      <div>
        <h1>Main Component</h1>
        <Form getData={ this.props.getData } />
        <List results={ results }/>
      </div>
    )
  }

}