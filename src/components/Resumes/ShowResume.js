// src/components/About/index.js
import React, { Component } from 'react';
import * as actions from '../../actions';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './style.css';
import { browserHistory, Link } from 'react-router';

class ShowResume extends Component {
  constructor(props){
    super(props)
    this.handleDeleteUser = this.handleDeleteUser.bind(this)
    this.getUserEducation = this.getUserEducation.bind(this)
    this.state = {education: "nothing"}
  }

  getUser(){
    let user = this.props.user

//     let obj = user;
//     for(var i = 0; i < obj.length; ++i){
//    //do something with obj[i]
//    for(var ind in obj[i]) {
//         console.log(ind);
//         for(var vals in obj[i][ind]){
//             console.log(vals, obj[i][ind][vals]);
//         }
//    }
// }
    let boundItemClick = this.handleDeleteUser.bind(this, user);
      return <div key={user.id}><h4>{user.id}</h4>
        <h3>{user.name}</h3>
        <h4>{user.email}</h4>
        <h4>{user.phone}</h4>
        <h4>{user.website}</h4>
        <h4>{user.blog}</h4>
        <h4>{user.linkedin}</h4>
        <h4>{user.github}</h4>
        <h3>Work History</h3>
        <h3>Education</h3>
        <h3>Skills</h3>
        <p>{JSON.stringify(user.Skills)}</p>

    <p id={user.id} onClick={boundItemClick}>Delete</p></div>
  }

getUserEducation(){
  let user = this.props.user
  var name = "harry"
  var test = setTimeout(function(){
    let name = user.Education[0].institutionName
    console.log(name)
    debugger;
    // this.setState({
    //   education: "hello"
    // })
    return <div>{user.Education[0].institutionName}</div>
  }, 1);
  console.log(`test = ${test}`)
  console.log(`name = ${name}`)
}


  handleDeleteUser(user, event){
    event.preventDefault()
    this.props.actions.deleteUser(user.id)
    browserHistory.push('/resumes')
  }

  render() {
    return (
      <div>
        <h2> Account Info</h2>
        <div>{this.getUser()}</div>
          <Link to={`/users/${this.props.user.id}/edit`}>Update {this.props.user.title}</Link>
          <div>{this.getUserEducation()}</div>
          <div>{this.state.education}</div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  if (state.users.length > 0){
    const user = state.users.find((user) => {
      return parseInt(user.id, 10) === parseInt(ownProps.params.id, 10)
    })
    return {user: user}
  } else {
    return {user: "n/a"}
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)

export default componentCreator(ShowResume);
