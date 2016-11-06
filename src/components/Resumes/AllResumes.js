import React, { Component } from 'react';

import './style.css';

class AllResumes extends Component {
  constructor(props){
    super(props)
    this.makeJobs = this.makeJobs.bind(this)
  }

  getWorkHistory(){
    let things = ""
  let works = fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(function(data){
    return data.map(function(user){
      return user})
  }).then(stuff => <h1>{this.makeJobs(stuff)}</h1>)

}
makeJobs(json){
 return json.map(user => console.log(<div>{user.name}</div>))
}
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    return (
      <div>
        <h1>
          All Resumes
        </h1>
        <div>{this.getWorkHistory()}
        </div>

      </div>
    );
  }
}

export default AllResumes;
