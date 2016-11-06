// src/components/About/index.js
import React, { Component } from 'react';
import explainerUrl from './resume-template-white-lg.gif';
import './style.css';

class About extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    return (
      <div>
        <h1>
          about
        </h1>
        <img className="explainer" src={explainerUrl} alt="explainer-gif"/>

      </div>
    );
  }
}

export default About;
