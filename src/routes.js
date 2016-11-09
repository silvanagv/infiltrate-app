import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

import CreateUser from './components/Users/CreateUser';
import ShowUser from './components/Users/ShowUser';

import CreateWork from './components/Resumes/CreateWork';
import CreateEducation from './components/Resumes/CreateEducation';
import CreateSkill from './components/Resumes/CreateSkill';


import CreateResume from './components/Resumes/CreateResume';
import ShowResume from './components/Resumes/ShowResume';
import UpdateResume from './components/Resumes/UpdateResume';
import DeleteResume from './components/Resumes/DeleteResume';
import AllResumes from './components/Resumes/AllResumes';

import RootPath from './components/Root';



export default(
  <Route path="/" component={App} >
    <IndexRoute component={RootPath}/>

    <Route path="/about" component={About} />
    <Route path="/signup" component={CreateUser} />
    <Route path="/users/:id" component={ShowUser} />

    <Route path="/jobs/new" component={CreateWork} />
    <Route path="/skills/new" component={CreateSkill} />
    <Route path="/educations/new" component={CreateEducation} />


    <Route path="/resumes/new" component={CreateResume} />
    <Route path="/resumes/:id" component={ShowResume} />
    <Route path="/resume/:id" component={UpdateResume} />
    <Route path="/resume/:id" component={DeleteResume} />
    <Route path="/resumes" component={AllResumes} />

    <Route path="*" component={NotFound} />

</Route>
);
