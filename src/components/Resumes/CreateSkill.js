import React from 'react';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import './style.css';

class CreateSkill extends React.Component {
  constructor(props){
    super(props)
    this.state = {latestUser: 9}
    this.newSkillHandler = this.newSkillHandler.bind(this)
  }

  newSkillHandler(event){
    event.preventDefault()

    let sorted = this.props.users.sort(function(a,b){
      return parseFloat(a.id) - parseFloat(b.id)
    })
    console.log(`sorted equals ${sorted[sorted.length-1]}`)
    const newSkill = {
      name: this.refs.name.value,
      type: this.refs.type.value,
      levelOfProficiency: this.refs.levelOfProficiency.value,
      UserId: sorted[sorted.length-1].id
    }
    console.log(newSkill)

    this.props.actions.addSkill(newSkill)
    // console.log(this.props.skills)
    // const newSkillUser = {
    //   UserId: sorted[sorted.length-1].id,
    //   SkillId: this.props.skills[this.props.skills.length-1].id
    // }
    //
    //   this.props.actions.addSkillUser(newSkillUser)
      browserHistory.push(`/resumes/${sorted[sorted.length-1].id}`)
  }

  render() {
    return (
      <div>
        <h2>Create Skill</h2>
        <form onSubmit={this.newSkillHandler}>
          <input ref="name" placeholder="Name"/>
          <input ref="type" placeholder="Type"/>
          <input ref="levelOfProficiency" placeholder="Level of Proficiency"/>
          <input type='submit'/>
        </form>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {
    works: state.works,
    skills: state.skills,
    educations: state.educations,
    users: state.users
    }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(CreateSkill)
