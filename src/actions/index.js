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

export function updateUser(updatedUserFromForm){
  const updatedUserFromApi = fetch(`http://localhost:8080/users/${updatedUserFromForm.id}`,{
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user: updatedUserFromForm})
  }).then(response => response.json())
  .then(updatedUserPayload => updatedUserPayload)
  return {type: 'UPDATE_USER', payload: updatedUserFromApi}
}

export function fetchUsers(){
  const users = fetch('http://localhost:8080/users').then(response => response.json())
  .then(usersPayload => usersPayload)
  return {type: 'FETCH_USERS', payload: users}
}

export function deleteUser(id){
  const url = `http://localhost:8080/users/${id}`
  fetch(url,{
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(userPayload => userPayload)
  return {type: 'DELETE_USER', payload: id}
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

export function updateWork(updatedWorkFromForm){
  const updatedWorkFromApi = fetch(`http://localhost:8080/works/${updatedWorkFromForm.id}`,{
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({work: updatedWorkFromForm})
  }).then(response => response.json())
  .then(updatedWorkPayload => updatedWorkPayload)
  return {type: 'UPDATE_WORK', payload: updatedWorkFromApi}
}

export function fetchWorks(){
  const works = fetch('http://localhost:8080/works').then(response => response.json())
  .then(worksPayload => worksPayload)
  return {type: 'FETCH_WORKS', payload: works}
}

export function deleteWork(id){
  const url = `http://localhost:8080/works/${id}`
  fetch(url,{
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(workPayload => workPayload)
  return {type: 'DELETE_WORK', payload: id}
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

export function updateEducation(updatedEducationFromForm){
  const updatedEducationFromApi = fetch(`http://localhost:8080/educations/${updatedEducationFromForm.id}`,{
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({education: updatedEducationFromForm})
  }).then(response => response.json())
  .then(updatedEducationPayload => updatedEducationPayload)
  return {type: 'UPDATE_EDUCATION', payload: updatedEducationFromApi}
}

export function fetchEducations(){
  const educations = fetch('http://localhost:8080/educations').then(response => response.json())
  .then(educationsPayload => educationsPayload)
  return {type: 'FETCH_EDUCATIONS', payload: educations}
}

export function deleteEducation(id){
  const url = `http://localhost:8080/educations/${id}`
  fetch(url,{
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(educationPayload => educationPayload)
  return {type: 'DELETE_EDUCATION', payload: id}
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
  const skills = fetch('http://localhost:8080/skills')
  .then(response => response.json())
  .then(skillsPayload => skillsPayload)
  return {type: 'FETCH_SKILLS', payload: skills}
}

export function deleteSkill(id){
  const url = `http://localhost:8080/skills/${id}`
  fetch(url,{
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(skillPayload => skillPayload)
  return {type: 'DELETE_SKILL', payload:id}
}

export function updateSkill(updatedSkillFromForm){
  const updatedSkillFromApi = fetch(`http://localhost:8080/skills/${updatedSkillFromForm.id}`,{
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({skill: updatedSkillFromForm})
  }).then(response => response.json())
  .then(updatedSkillPayload => updatedSkillPayload)
  return {type: 'UPDATE_SKILL', payload: updatedSkillFromApi}
}

export function addSkillUser(newSkillUserFromForm){
  const newSkillUserFromApi = fetch('http://localhost:8080/skillusers',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({skilluser: newSkillUserFromForm})
  }).then(response => response.json())
  .then(newSkillUserPayload => newSkillUserPayload )
  return {type: 'ADD_SKILL_TO_USER', payload: newSkillUserFromApi}
}
