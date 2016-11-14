import React, { Component } from 'react';
import * as actions from '../../actions';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import './style.css';

class AllResumes extends Component {
  constructor(props){
    super(props)
    this.updateSkillHandler = this.updateSkillHandler.bind(this)
  }

  getSkills(){
    let skill = this.props.skill
      return <div key={skill.id}><h4>{skill.id}: {skill.name}</h4>
    <p id={skill.id}>Delete</p></div>
  }

  updateSkillHandler(event){
    event.preventDefault()

    const updatedSkill = {
      id: this.props.params.id,
      name: this.refs.name.value,
      type: this.refs.type.value,
      levelOfProficiency: this.refs.levelOfProficiency.value
    }
    this.props.actions.updateSkill(updatedSkill)
    browserHistory.push('/resumes')
  }

  render() {
    return (
      <div>
        <h2> Skill</h2>
        <div>{this.getSkills()}</div>
          <h2>Update Skill</h2>
          <form onSubmit={this.updateSkillHandler}>
            <input ref="name" placeholder="Name"/>
            <input ref="type" placeholder="Type"/>
            <input ref="levelOfProficiency" placeholder="Level of Proficiency"/>
            <input type='submit'/>
          </form>
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

export default componentCreator(AllResumes);
