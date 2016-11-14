import React, { Component } from 'react';
import * as actions from '../../actions';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import './style.css';


class ShowSkill extends Component {
  constructor(props){
    super(props)
    this.handleDeleteSkill = this.handleDeleteSkill.bind(this)
  }

  getSkill(){
    let skill = this.props.skill
    let boundItemClick = this.handleDeleteSkill.bind(this, skill);
      return <div key={skill.id}><h4>{skill.id}: {skill.name}</h4>
    <p id={skill.id} onClick={boundItemClick}>Delete</p></div>
  }

  handleDeleteSkill(skill, event){
    event.preventDefault()
    this.props.actions.deleteSkill(skill.id)
    browserHistory.push('/resumes')
  }

  render() {
    return (
      <div>
        <h2> Skill</h2>
        <div>{this.getSkill()}</div>
        <Link to={`/skills/${this.props.skill.id}/edit`}>Update {this.props.skill.name}</Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  if (state.skills.length > 0){
    const skill = state.skills.find((skill) => {
      return parseInt(skill.id, 10) === parseInt(ownProps.params.id, 10)
    })
    return {skill: skill}
  } else {
    return {skill: "n/a"}
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)

export default componentCreator(ShowSkill);
