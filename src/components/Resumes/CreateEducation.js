import React from 'react';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory} from 'react-router';
import './style.css';

class CreateResume extends React.Component {
  constructor(props){
    super(props)
    this.newEducationHandler = this.newEducationHandler.bind(this)
  }

  newEducationHandler(event){
    event.preventDefault()
    let sorted = this.props.users.sort(function(a,b){
      return parseFloat(a.id) - parseFloat(b.id)
    })
    const newEducation = {
      institutionName: this.refs.institutionName.value,
      qualification: this.refs.qualification.value,
      startDate: this.refs.startDate.value,
      endDate: this.refs.endDate.value,
      UserId: sorted[sorted.length-1].id
    }
    this.props.actions.addEducation(newEducation)
    browserHistory.push('/skills/new')

  }

  render() {
    return (
      <div>
        <h2>Create Education</h2>
        <form onSubmit={this.newEducationHandler}>
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


function mapStateToProps(state){
  return {
    skills: state.skills,
    users: state.users
    }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(CreateResume)
