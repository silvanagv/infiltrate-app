import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

import CreateUser from './components/Users/CreateUser';
import ShowUser from './components/Users/ShowUser';
import UpdateUser from './components/Users/UpdateUser';
import AllUsers from './components/Users/AllUsers';


import CreateResume from './components/Resumes/CreateResume';
import ShowResume from './components/Resumes/ShowResume';
import UpdateResume from './components/Resumes/UpdateResume';
import AllResumes from './components/Resumes/AllResumes';

import CreateSkill from './components/Resumes/CreateSkill';
import ShowSkill from './components/Resumes/ShowSkill';
import UpdateSkill from './components/Resumes/UpdateSkill';
import AddSkill from './components/Resumes/CreateSkillUser';

import CreateEducation from './components/Resumes/CreateEducation';
import ShowEducation from './components/Resumes/ShowEducation';
import UpdateEducation from './components/Resumes/UpdateEducation';

import CreateWork from './components/Resumes/CreateWork';
import ShowWork from './components/Resumes/ShowWork';
import UpdateWork from './components/Resumes/UpdateWork';

import RootPath from './components/Root';

export default(
  <Route path="/" component={App} >
    <IndexRoute component={RootPath}/>

    <Route path="/about" component={About} />
    <Route path="/signup" component={CreateUser} />
    <Route path="/users/:id" component={ShowUser} />
    <Route path="/users/:id/edit" component={UpdateUser} />
    <Route path="/users" component={AllUsers} />

    <Route path="/jobs/new" component={CreateWork} />
    <Route path="/skills/new" component={CreateSkill} />
    <Route path="/educations/new" component={CreateEducation} />
    <Route path="/skills/add" component={AddSkill} />

    <Route path="/resumes/new" component={CreateResume} />
    <Route path="/resumes/:id" component={ShowResume} />
    <Route path="/resume/:id" component={UpdateResume} />
    <Route path="/resumes" component={AllResumes} />

    <Route path="/skills/:id" component={ShowSkill} />
    <Route path="/skills/:id/edit" component={UpdateSkill} />

    <Route path="/educations/:id" component={ShowEducation} />
    <Route path="/educations/:id/edit" component={UpdateEducation} />

    <Route path="/works/:id" component={ShowWork} />
    <Route path="/works/:id/edit" component={UpdateWork} />


    <Route path="*" component={NotFound} />

</Route>
);
