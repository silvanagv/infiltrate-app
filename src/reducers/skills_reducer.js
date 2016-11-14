export default function skillsReducer(state=[], action) {
  switch (action.type) {
    case 'FETCH_SKILLS':
      return action.payload;
    case 'ADD_SKILL':
      return [...state, action.payload];
    case 'UPDATE_SKILL':
      return [...state]
    default:
      return state;
  }
};
