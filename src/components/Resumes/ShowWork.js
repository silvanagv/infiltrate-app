import React, { Component } from 'react';
import * as actions from '../../actions';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './style.css';
import { browserHistory, Link } from 'react-router';

class AllResumes extends Component {
  constructor(props){
    super(props)
    this.handleDeleteWork = this.handleDeleteWork.bind(this)
  }

  getJob(){
    let work = this.props.work
    let boundItemClick = this.handleDeleteWork.bind(this, work);
      return <div key={work.id}><h4>{work.id}</h4>
        <a href={`http://www.${work.companyUrl}`}><h3>{work.company}</h3></a>
    <p id={work.id} onClick={boundItemClick}>Delete</p></div>
  }

  handleDeleteWork(work, event){
    event.preventDefault()
    this.props.actions.deleteWork(work.id)
    browserHistory.push('/resumes')
  }

  render() {
    return (
      <div>
        <h2> Skill</h2>
        <div>{this.getJob()}</div>
          <Link to={`/works/${this.props.work.id}/edit`}>Update {this.props.work.title}</Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  if (state.works.length > 0){
    const work = state.works.find((work) => {
      return parseInt(work.id, 10) === parseInt(ownProps.params.id, 10)
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
