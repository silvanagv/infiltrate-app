export function addUser(newUserFromForm){
  const newUserFromApi = fetch('http://localhost:8080/users',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user: newUserFromForm})
  }).then(response => response.json())
  .then(newUserPayload => newUserPayload)
  return {type: 'ADD_USER', payload: newUserFromApi}
}

export function fetchUsers(){
  const users = fetch('http://localhost:8080/users').then(response => response.json())
  .then(usersPayload => usersPayload)
  return {type: 'FETCH_USERS', payload: users}
}

export function addWork(newWorkFromForm){
  const newWorkFromApi = fetch('http://localhost:8080/works',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({work: newWorkFromForm})
  }).then(response => response.json())
  .then(newWorkPayload => newWorkPayload)
  return {type: 'ADD_WORK', payload: newWorkFromApi}
}

export function fetchWorks(){
  const works = fetch('http://localhost:8080/works').then(response => response.json())
  .then(worksPayload => worksPayload)
  return {type: 'FETCH_WORKS', payload: works}
}

export function addEducation(newEducationFromForm){
  const newEducationFromApi = fetch('http://localhost:8080/educations',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({education: newEducationFromForm})
  }).then(response => response.json())
  .then(newEducationPayload => newEducationPayload)
  return {type: 'ADD_EDUCATION', payload: newEducationFromApi}
}

export function fetchEducations(){
  const educations = fetch('http://localhost:8080/educations').then(response => response.json())
  .then(educationsPayload => educationsPayload)
  return {type: 'FETCH_EDUCATIONS', payload: educations}
}

export function addSkill(newSkillFromForm){
  const newSkillFromApi = fetch('http://localhost:8080/skills',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({skill: newSkillFromForm})
  }).then(response => response.json())
  .then(newSkillPayload => newSkillPayload )
  return {type: 'ADD_SKILL', payload: newSkillFromApi}
}

export function fetchSkills(){
  const skills = fetch('http://localhost:8080/skills').then(response => response.json())
  .then(skillsPayload => skillsPayload)
  return {type: 'FETCH_SKILLS', payload: skills}
}
