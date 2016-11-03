import React from 'react';

class SkillUser extends React.Component {

  render() {
    return <html>
    <head>
    </head>
    <body>
      <h1> Get All SkillUsers</h1>
      <div> {this.makeSkills()}</div>
    </body>
  </html>;
  }
}

module.exports = SkillUser;
