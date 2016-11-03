import React from 'react';

class SkillUser extends React.Component {
  getSkills(){
    return this.props.skills.map(skill =>
      <div>
        <h3>Skill {skill.id}: {skill.name} </h3>
        {skill.Users.map(user => <p>{user.name}</p>)}
      </div>)
  }

  render() {
    return <html>
    <head>
    </head>
    <body>
      <h1> Skills Index</h1>
      <div> {this.getSkills()}</div>
    </body>
  </html>;
  }
}

module.exports = SkillUser;
