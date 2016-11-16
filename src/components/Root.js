import React, { Component } from 'react';
import { Link } from 'react-router'

import './style.css';

export default class NotFound extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    return (
      <div>
        <h1>
        Welcome. Would you like to <Link to={`/signup`}>make an account</Link>? 
        </h1>
      </div>
    );
  }
}
