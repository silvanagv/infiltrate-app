import React from 'react';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import './style.css';

class CreateResume extends React.Component {
  constructor(props){
    super(props)
    this.newWorkHandler = this.newWorkHandler.bind(this)
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
    browserHistory.push('/educations/new')
    //import browser history obj from react router (use push method to redirect to new form)
  }

  render() {
    return (
      <div className="tiny">

        <h2>Create Work</h2>
        <form onSubmit={this.newWorkHandler}>
          <input ref="title" placeholder="Title"/>
          <input ref="company" placeholder="Company" />
          <input ref="companyUrl" placeholder="Company Website" />
          <input ref="responsibilities" placeholder="Responsibilities" />
          <input ref="UserId" type="number" placeholder="UserId" />
          <input type="date" ref="startDate" placeholder="Start Date" required/>
          <input type="date" ref="endDate" placeholder="End Date" required/>
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
