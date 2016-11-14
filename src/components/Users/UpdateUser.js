import React, { Component } from 'react';
import * as actions from '../../actions';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import './style.css';

class AllResumes extends Component {
  constructor(props){
    super(props)
    this.updateUserHandler = this.updateUserHandler.bind(this)
  }

  getUser(){
    let user = this.props.user
      return <div key={user.id}><h4>{user.id}: {user.name}</h4>
    <p id={user.id}>Delete</p></div>
  }

  updateUserHandler(event){
    event.preventDefault()

    const updatedUser = {
      id: this.props.params.id,
      username: this.refs.username.value,
      admin: this.refs.admin.value,
      password: this.refs.password.value,
      name: this.refs.name.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
      website: this.refs.website.value,
      blog: this.refs.blog.value,
      linkedin: this.refs.linkedin.value,
      github: this.refs.github.value
    }
    this.props.actions.updateUser(updatedUser)
    browserHistory.push('/users')
  }

  render() {
    return (
      <div>
        <h2> User</h2>
        <div>{this.getUser()}</div>
          <h2>Update User</h2>
          <form onSubmit={this.updateUserHandler}>
            <input ref="username" type="text" placeholder="Username"/>
            <label>Admin?</label>
            <input ref="admin" type="checkbox" placeholder="Admin"/>
            <input ref="password" type="password" placeholder="Password"/>
            <input ref="name" type="text" placeholder="name"/>
            <input ref="email" type="text" placeholder="email"/>
            <input ref="phone" type="text" placeholder="phone"/>
            <input ref="website" type="text" placeholder="website"/>
            <input ref="blog" type="text" placeholder="blog"/>
            <input ref="linkedin" type="text" placeholder="linkedin"/>
            <input ref="github" type="text" placeholder="github"/>
            <input type='submit'/>
          </form>
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

export default componentCreator(AllResumes);
