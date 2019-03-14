import React, { Component } from 'react';
const uuid = require('uuid');

export default class List extends Component {

  render() {

    const { results } = this.props
    let people = null;

    console.log(results)

    if (results) {
      people = results.map(p => {
        return (
          <ul key={ uuid() }>
            <li>{ p.name }</li>
          </ul>
        )
      })
    }
    
    return (
      <>
        {people}
      </>
    )
  }
}
