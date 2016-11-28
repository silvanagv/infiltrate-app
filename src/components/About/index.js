// src/components/About/index.js
import React, { Component } from 'react';
import explainerUrl from './resume-template-white-lg.gif';
import './style.css';

export default (props) =>
   <div>
    <h1> about</h1>
    <img className="explainer" src={explainerUrl} alt="explainer-gif"/>
  </div>
