export default function skillusersReducer(state=[], action) {
  switch (action.type) {
    case 'FETCH_SKILLUSERS':
      return action.payload;
    case 'ADD_SKILL_USER':
      return [...state, action.payload];
    case 'UPDATE_SKILL_USER':
      return [...state]
    case 'DELETE_SKILL_USER':
      return state.filter(skill => skill.id !== action.payload);
    default:
      return state;
  }
};
