import React, { Component } from 'react';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import './style.css';

class CreateUser extends Component {
  constructor(props){
    super(props)
    this.state = {latestUser: 9}
    this.newUserHandler = this.newUserHandler.bind(this)
  }

  getSkills(){
    return this.props.skills.map(skill => {
      return <input key={skill.id}value={skill.name}/>
    })
  }

  newUserHandler(event){
    event.preventDefault()
    const newUser = {
      username: this.refs.username.value,
      password: this.refs.password.value,
      name: this.refs.name.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
      website: this.refs.website.value,
      blog: this.refs.blog.value,
      linkedin: this.refs.linkedin.value,
      github: this.refs.github.value
    }
    // this.props.actions.addUser(newUser)
    // debugger;
    // this.setState({
    //   latestUser: 2
    // })
    // browserHistory.push('/resumes/9')
    this.props.actions.addUser(newUser)
    browserHistory.push('/resumes/9')
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <p>Hi there! Please enter a few details about yourself to start making resumes.</p>
        <form onSubmit={this.newUserHandler}>
          <input ref="username" type="text" placeholder="Username"/>
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

function mapStateToProps(state){
  return {
    skills: state.skills
    }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(CreateUser)
