// src/components/About/index.js
import React, { Component } from 'react';
import * as actions from '../../actions';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './style.css';
import { browserHistory, Link } from 'react-router';

class ShowUser extends Component {
  constructor(props){
    super(props)
    this.handleDeleteUser = this.handleDeleteUser.bind(this)
  }

  getUser(){
    let user = this.props.user
    let boundItemClick = this.handleDeleteUser.bind(this, user);
      return <div key={user.id}><h4>{user.id}</h4>
        <h3>{user.name}</h3>
        <h4>{user.email}</h4>
        <h4>{user.phone}</h4>
        <h4>{user.website}</h4>
        <h4>{user.blog}</h4>
        <h4>{user.linkedin}</h4>
        <h4>{user.github}</h4>

    <p id={user.id} onClick={boundItemClick}>Delete</p></div>
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

      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  if (state.users.length > 0){
    const user = state.users.find((user) => {
      return user.id == ownProps.params.id
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

export default componentCreator(ShowUser);
