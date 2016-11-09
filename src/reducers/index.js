import { combineReducers } from 'redux';
import skillsReducer from './skills_reducer';
import educationsReducer from './educations_reducer';
import usersReducer from './users_reducer';
import worksReducer from './works_reducer';

const rootReducer = combineReducers({
  users: usersReducer,
  works: worksReducer,
  skills: skillsReducer,
  educations: educationsReducer
});

export default rootReducer;
