import React, { Component } from 'react';
import * as actions from '../../actions';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import './style.css';

class AllResumes extends Component {
  constructor(props){
    super(props)
    this.updateWorkHandler = this.updateWorkHandler.bind(this)
  }

  getJob(){
    let work = this.props.work
      return <div key={work.id}><h4>{work.id}: {work.company}</h4>
    <p id={work.id}>Delete</p></div>
  }

  updateWorkHandler(event){
    event.preventDefault()

    const updatedWork = {
      id: this.props.params.id,
      title: this.refs.title.value,
      company: this.refs.company.value,
      companyUrl: this.refs.companyUrl.value,
      responsibilities: this.refs.responsibilities.value,
      startDate: this.refs.startDate.value,
      endDate: this.refs.endDate.value,
      UserId: this.refs.UserId.value
    }
    this.props.actions.updateWork(updatedWork)
    browserHistory.push('/resumes')
    //import browser history obj from react router (use push method to redirect to new form)
  }

  render() {
    return (
      <div>
        <h2> Skill</h2>
        <div>{this.getJob()}</div>

          <h2>Update Job</h2>
          <form onSubmit={this.updateWorkHandler}>
            <input ref="title" value={this.props.work.title}/>
            <input ref="company" placeholder={this.props.work.company} />
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

function mapStateToProps(state, ownProps){
  if (state.works.length > 0){
    const work = state.works.find((work) => {
      return work.id == ownProps.params.id
    })
    return {work: work}
  } else {
    return {work: "n/a"}
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)

export default componentCreator(AllResumes);
