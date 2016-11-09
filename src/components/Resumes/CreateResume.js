import React from 'react';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './style.css';

class CreateResume extends React.Component {
  constructor(props){
    super(props)
    this.newSkillHandler = this.newSkillHandler.bind(this)
    this.newEducationHandler = this.newEducationHandler.bind(this)
    this.newWorkHandler = this.newWorkHandler.bind(this)
  }

  newSkillHandler(event){
    event.preventDefault()

    const newSkill = {
      name: this.refs.name.value,
      type: this.refs.type.value,
      levelOfProficiency: this.refs.levelOfProficiency.value
    }
    this.props.actions.addSkill(newSkill)
  }

  newEducationHandler(event){
    event.preventDefault()

    const newEducation = {
      institutionName: this.refs.institutionName.value,
      qualification: this.refs.qualification.value,
      startDate: this.refs.startDate.value,
      endDate: this.refs.endDate.value
    }
    this.props.actions.addEducation(newEducation)
  }

  newWorkHandler(event){
    event.preventDefault()

    const newWork = {
      title: this.refs.title.value,
      company: this.refs.company.value,
      companyUrl: this.refs.companyUrl.value,
      responsibilities: this.refs.responsibilities.value,
      startDate: this.refs.startDate.value,
      endDate: this.refs.endDate.value,
      UserId: this.refs.UserId.value
    }
    this.props.actions.addWork(newWork)
  }

  render() {
    return (
      <div className="tiny">
        <h2>Create Skill</h2>
        <form onSubmit={this.newSkillHandler}>
          <input ref="name" />
          <input ref="type" />
          <input ref="levelOfProficiency" />
          <input type='submit'/>
        </form>
        <h2>Create Education</h2>
        <form onSubmit={this.newEducationHandler}>
          <input ref="institutionName" placeholder="Name of Institution"/>
          <input ref="qualification" placeholder="Qualification" />
          <input type="date" ref="startDate" placeholder="Start Date" />
          <input type="date" ref="endDate" placeholder="End Date" />
          <input type='submit'/>
        </form>
        <h2>Create Work</h2>
        <form onSubmit={this.newWorkHandler}>
          <input ref="title" placeholder="Title"/>
          <input ref="company" placeholder="Company" />
          <input ref="companyUrl" placeholder="Company Website" />
          <input ref="responsibilities" placeholder="Responsibilities" />
          <input ref="UserId" type="number" placeholder="UserId" />
          <input type="date" ref="startDate" placeholder="Start Date" />
          <input type="date" ref="endDate" placeholder="End Date" />
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
export default componentCreator(CreateResume)
