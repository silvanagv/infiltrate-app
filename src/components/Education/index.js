import React, { Component } from 'react';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';
import ShowEducation from './ShowEducation.js'
import { connect } from 'react-redux';


class Education extends Component {
  constructor(props){
    super(props)
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this)
  }
  handleDeleteEducation(){
    console.log("handleDeleteEducation was called")
    console.log(this)
  }
  render() {
    return (
      <div>
        <h1> education index component</h1>
        <div>
          <ShowEducation educations={this.props.educations} handleDeleteEducation={this.handleDeleteEducation} />
        </div>
        {this.props.children}
      </div>
    )
  }
}


function mapStateToProps(state, ownProps){
  if (state.educations.length > 0){
    return {educations: state.educations}
  } else {
    return {educations: "n/a"}
  }
}


function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)

export default componentCreator(Education);
