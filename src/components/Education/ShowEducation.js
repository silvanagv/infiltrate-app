import React, { Component } from 'react';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
// import './style.css';
import { browserHistory, Link } from 'react-router';

export default (props) =>
<div>
  <h1>
    Show education
  </h1>
  <div id={props.educations[0].id}>
    <p>
      {props.educations[0].institutionName}
    </p>
    <button id={props.educations[0].id} onClick={props.handleDeleteEducation}>Click me</button>
  </div>

</div>
