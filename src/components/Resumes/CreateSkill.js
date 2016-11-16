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
    const newSkill = {
      name: this.refs.name.value,
      type: this.refs.type.value,
      levelOfProficiency: this.refs.levelOfProficiency.value
    }
    this.setState({
      latestUser: 2
    }, function(){
      console.log(this.state)
      this.props.actions.addSkill(newSkill)
      // const newSkillUser = {
      //
      // }
      // this.props.actions.addSkillUser(newSkillUser)
      browserHistory.push(`/resumes/${this.state.latestUser}`)
    })
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


function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}





const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(CreateSkill)
