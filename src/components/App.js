
// src/components/App/index.js
import React, { Component } from 'react';


import './style.css';

class App extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    return (
      <div>
       {this.props.children}
      </div>
    );
  }
}

export default App;
