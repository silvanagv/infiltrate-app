import React, { Component } from 'react';
import * as actions from '../../actions';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './style.css';
import { browserHistory, Link } from 'react-router';

class ShowEducation extends Component {
  constructor(props){
    super(props)
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this)
  }
  getEducation(){
    let education = this.props.education
    let boundItemClick = this.handleDeleteEducation.bind(this, education);
      return <div key={education.id}><h4>{education.id}: {education.institutionName} - {education.qualification} - {education.startDate}</h4>
      <p id={education.id} onClick={boundItemClick}>Delete</p></div>
  }

  handleDeleteEducation(education, event){
    event.preventDefault()
    this.props.actions.deleteEducation(education.id)
    browserHistory.push('/resumes')
  }

  render() {
    return (
      <div>
        <h2> Skill</h2>
        <div>{this.getEducation()}</div>
          <Link to={`/educations/${this.props.education.id}/edit`}>Update {this.props.education.name}</Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  if (state.educations.length > 0){
    const education = state.educations.find((education) => {
      return education.id == ownProps.params.id
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

export default componentCreator(ShowEducation);
