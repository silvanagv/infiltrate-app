import React from 'react';

class AddSkill extends React.Component {
getSkills(){
  return this.props.skills.map(skill =>
    <div>
      <label>{skill.name}</label>
      <input type="checkbox" name="test" value={skill.name}></input>
    </div>)
}
  render() {
    return <div>
        <h1> Create Résumé</h1>
        <h2> Skills</h2>
        <form class="" action="/newskill" method="post">
          {this.getSkills()}

          <input type="text" name="test" value=""></input>
          <input type="submit"></input>
        </form>

        <h2> Work History</h2>
        <form class="" action="/newskill" method="post">
          <input type="text" name="company" placeholder="company"></input>
            <input type="text" name="companyUrl" placeholder="Company Website"></input>
            <input type="text" name="role" placeholder="role"></input>            <input type="text" name="responsibilities" placeholder="responsibilities"></input>
            <input type="text" name="role"></input>
          <input type="submit"></input>
        </form>

        <h2> Education</h2>
        <form class="" action="/newskill" method="post">

          <input type="text" name="test" value=""></input>
          <input type="submit"></input>
        </form>
      </div>;
  }
}

module.exports = AddSkill;
