import React, { Component } from 'react';
import { Route } from 'react-router';
import Main from './components/Main';
import './App.css';

class App extends Component {
  state = {
    data: []
  }

  getData = (name) => {
    const url = 'https://swapi.co/api/people/?search=';
    fetch(`${url}${name}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Server Error');
        }
        return res.json();
      })
      .then(data => {this.setState({data})})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path='/'>
            <Main props={ this.state.data } getData={ this.getData }/>
          </Route>
        </header>
      </div>
    );
  }
}

export default App;
