import React, { Component } from 'react';
import * as actions from '../../actions';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import './style.css';

class AllUsers extends Component {
  constructor(props){
    super(props)
    this.handleDeleteUser = this.handleDeleteUser.bind(this)
  }

  getUsers(){
    return this.props.users.map(user => {
      let boundItemClick = this.handleDeleteUser.bind(this, user);
      return <div key={user.id}>
        <Link to={`/users/${user.id}`}>{user.id}: {user.name}</Link>
    <p id={user.id} onClick={boundItemClick}>Delete</p></div>
    })
  }

  handleDeleteUser(user, event){
    event.preventDefault()
    this.props.actions.deleteUser(user.id)
    browserHistory.push('/users')
  }

  render() {
    return (
      <div>
        <h1> Users</h1>
        <div>{this.getUsers()}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    users: state.users
    }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)

export default componentCreator(AllUsers);