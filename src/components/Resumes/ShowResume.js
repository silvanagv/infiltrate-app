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
        <h4>{user.email} | {user.phone} | <Link to={user.website}>{user.website}</Link> | <Link to={`linkedin.com/{user.linkedin}`}>linkedin.com/{user.linkedin}</Link> | github.com/{user.github}</h4>
        <button id={user.id} onClick={boundItemClick}>Delete</button>
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
    console.log(this.props)
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
        <Link to={`/users/${this.props.user.id}/edit`}><button>Update {this.props.user.title}</button> </Link><br />
        <h2 className="inline-heading">Experience</h2>  <button><Link to={`/jobs/new`}>Add More</Link></button>
        <div>{this.getUserJobs()}</div>
        <h2 className="inline-heading">Education</h2> <button><Link to={`/educations/new`}>Add More</Link></button>
        <div>{this.getUserEducation()}</div>
        <h2 className="inline-heading">Skills</h2> <button><Link to={`/skills/new`}>Add More</Link></button>
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
