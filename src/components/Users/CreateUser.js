import React from 'react';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import './style.css';

class CreateUser extends React.Component {
  constructor(props){
    super(props)
    this.newUserHandler = this.newUserHandler.bind(this)
  }

  newUserHandler(event){
    event.preventDefault()

    const newUser = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
      website: this.refs.website.value,
      blog: this.refs.blog.value,
      linkedin: this.refs.linkedin.value,
      github: this.refs.github.value
    }
    this.props.actions.addUser(newUser)
  }

  render() {
    return (
      <div>
        <h1>
          Sign Up
        </h1>
        <form onSubmit={this.newUserHandler}>
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


function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}



const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(CreateUser)
