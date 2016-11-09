export default function skillsReducer(state=[], action) {
  switch (action.type) {
    case 'FETCH_SKILLS':
      return action.payload;
    case 'ADD_SKILL':
      return [...state, action.payload]
    default:
      return state;
  }
};
