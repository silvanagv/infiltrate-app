import React from 'react';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import './style.css';

class CreateSkillUser extends React.Component {
  constructor(props){
    super(props)
    this.addSkillToUserHandler = this.addSkillToUserHandler.bind(this)
  }

  addSkillToUserHandler(event){
    event.preventDefault()
    const newSkillUser = {
      UserId: this.refs.UserId.value,
      SkillId: this.refs.SkillId.value,
    }
    this.props.actions.addSkillUser(newSkillUser)
    browserHistory.push('/resumes')

  }

  render() {
    return (
      <div>
        <h2>Add Skill to User</h2>
        <form onSubmit={this.addSkillToUserHandler}>
          <input ref="UserId" placeholder="UserId"/>
          <input ref="SkillId" placeholder="SkillId"/>
          <input type='submit'/>
        </form>
    </div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}



const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(CreateSkillUser)
