// src/components/About/index.js
import React, { Component } from 'react';
import * as actions from '../../actions';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './style.css';
import { browserHistory, Link } from 'react-router';

class ShowResume extends Component {
  constructor(props){
    super(props)
    this.handleDeleteUser = this.handleDeleteUser.bind(this)
    this.getUserEducation = this.getUserEducation.bind(this)
    this.state = {education: "empty"}
  }

  getUser(){
    let user = this.props.user
    let boundItemClick = this.handleDeleteUser.bind(this, user);
      return <div key={user.id}>
        <h4>{user.email} | {user.phone} | {user.website} | linkedin.com/{user.linkedin} | github.com/{user.github}</h4>
        <p id={user.id} onClick={boundItemClick}>Delete</p>
      </div>
  }

  getUserEducation(){
    let user = this.props.user
    return user.Education.map( education => <div key={education.id}>
      <h3>{education.qualification}</h3>
      <h4>{education.institutionName}</h4>
      <p>{education.startDate}-{education.endDate}</p>
      </div>)
  }

  getUserJobs(){
    let user = this.props.user
    return user.Works.map( work => <div key={work.id}>
      <h3>{work.title}, {work.startDate} - {work.endDate}</h3>
      <h4>{work.company}</h4>
      <p>{work.responsibilities}</p></div>)
  }

  getUserSkills(){
    let user = this.props.user
    return user.Skills.map(skill => <div key={skill.id}>{skill.name}</div>)
  }

  handleDeleteUser(user, event){
    event.preventDefault()
    this.props.actions.deleteUser(user.id)
    browserHistory.push('/resumes')
  }

  render() {
    return (
      <div>
        <h1>{this.props.user.name}</h1>
        {this.getUser()}
        <Link to={`/users/${this.props.user.id}/edit`}>Update {this.props.user.title}</Link>
        <h2>Experience</h2>
        <div>{this.getUserJobs()}</div>
        <h2>Education</h2>
        <div>{this.getUserEducation()}</div>
        <h2>Skills</h2>
        <div>{this.getUserSkills()}</div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  if (state.users.length > 0){
    const user = state.users.find((user) => {
      return parseInt(user.id, 10) === parseInt(ownProps.params.id, 10)
    })
    return {user: user}
  } else {
    return {user: {Works:[], Education:[], Skills: []}}
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)

export default componentCreator(ShowResume);
