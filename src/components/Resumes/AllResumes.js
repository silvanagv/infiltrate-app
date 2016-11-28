import React, { Component } from 'react';
import * as actions from '../../actions';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import './style.css';

class AllResumes extends Component {
  constructor(props){
    super(props)
    this.handleDeleteSkill = this.handleDeleteSkill.bind(this)
    this.handleDeleteWork = this.handleDeleteWork.bind(this)
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this)
  }

  getWorkHistory(){
    let jobs = this.props.works.sort(function(a,b){
      return parseFloat(a.id) - parseFloat(b.id)
    })

    return jobs.map(work => {
      let boundItemClick = this.handleDeleteWork.bind(this, work);
      return <div key={work.id}>
        <Link to={`/works/${work.id}`}>{work.id}: {work.title} </Link>
        <button id={work.id} onClick={boundItemClick}>Delete</button></div>
    })
  }

  getEducationHistory(){
    let educations = this.props.educations.sort(function(a,b){
      return parseFloat(a.id) - parseFloat(b.id)
    })
    return educations.map(education => {
      let boundItemClick = this.handleDeleteEducation.bind(this, education);
      return <div key={education.id}>
        <Link to={`/educations/${education.id}`}>{education.id}: {education.institutionName} </Link>
      <button id={education.id} onClick={boundItemClick}>Delete</button></div>
    })
  }

  getSkills(){
    let skills = this.props.skills.sort(function(a,b){
      return parseFloat(a.id) - parseFloat(b.id)
    })

    return skills.map(skill => {
      let boundItemClick = this.handleDeleteSkill.bind(this, skill);
      return <div key={skill.id}>
        <Link to={`/skills/${skill.id}`}>{skill.id}: {skill.name} </Link>
    <button id={skill.id} onClick={boundItemClick}> Delete</button></div>
    })
  }

  handleDeleteSkill(skill, event){
    event.preventDefault()
    this.props.actions.deleteSkill(skill.id)
    browserHistory.push('/resumes')
  }

  handleDeleteEducation(education, event){
    event.preventDefault()
    this.props.actions.deleteEducation(education.id)
    browserHistory.push('/resumes')
  }

  handleDeleteWork(work, event){
    event.preventDefault()
    this.props.actions.deleteWork(work.id)
    browserHistory.push('/resumes')
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

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)

export default componentCreator(AllResumes);
