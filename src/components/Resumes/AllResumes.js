import React, { Component } from 'react';
import * as actions from '../../actions';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import './style.css';

class AllResumes extends Component {
  constructor(props){
    super(props)
  }

  getWorkHistory(){
  return this.props.works.map(work => <div key={work.id}><a href={work.companyUrl}><h3>{work.company}</h3></a><p>{work.responsibilities}</p></div>)
  }

  getEducationHistory(){
    return this.props.educations.map(education => <div key={education.id}>{education.institutionName}</div>)
  }

  getSkills(){
  return this.props.skills.map(skill => <div key={skill.id}>{skill.name}</div>)
  }

  render() {
    return (
      <div>
        <h2> Jobs</h2>
        <div>{this.getWorkHistory()}</div>
        <h2> Education</h2>
        <div>{this.getEducationHistory()}</div>
        <h2> Skills</h2>
        <div>{this.getSkills()}</div>

      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    works: state.works,
    skills: state.skills,
    educations: state.educations
    }
}


const componentCreator = connect(mapStateToProps)

export default componentCreator(AllResumes);
