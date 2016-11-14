import React, { Component } from 'react';
import * as actions from '../../actions';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import './style.css';

class AllResumes extends Component {
  constructor(props){
    super(props)
    this.updateEducationHandler = this.updateEducationHandler.bind(this)
  }

  getEducation(){
    let education = this.props.education
      return <div key={education.id}><h4>{education.id}: {education.institutionName} - {education.qualification} - {education.startDate}</h4>
    <p id={education.id}>Delete</p></div>
  }

  updateEducationHandler(event){
    event.preventDefault()

    const updateEducation = {
      id: this.props.params.id,
      institutionName: this.refs.institutionName.value,
      qualification: this.refs.qualification.value,
      startDate: this.refs.startDate.value,
      endDate: this.refs.endDate.value
    }
    this.props.actions.updateEducation(updateEducation)
    browserHistory.push('/resumes')

  }

  render() {
    return (
      <div>
        <h2> Skill</h2>
        <div>{this.getEducation()}</div>
          <h2>Update Education</h2>
          <form onSubmit={this.updateEducationHandler}>
            <input ref="institutionName" placeholder="Name of Institution"/>
            <input ref="qualification" placeholder="Qualification" />
            <input type="date" ref="startDate" placeholder="Start Date" required/>
            <input type="date" ref="endDate" placeholder="End Date" required/>
            <input type='submit'/>
          </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  if (state.educations.length > 0){
    const education = state.educations.find((education) => {
      return parseInt(education.id, 10) === parseInt(ownProps.params.id, 10)
    })
    return {education: education}
  } else {
    return {education: "n/a"}
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)

export default componentCreator(AllResumes);
