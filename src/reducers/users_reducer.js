export default function usersReducer(state=[], action) {
  switch (action.type) {
    case 'FETCH_USERS':
      return action.payload;
    case 'ADD_USER':
      return [...state, action.payload, action.latestUser];
    case 'DELETE_USER':
      return state.filter(user => user.id !== action.payload)
    case 'ADD_SKILL_TO_USER':
      const newState = state.filter(user => user.id !== action.payload.id)
      return [...newState, action.payload]
    default:
      return state;
  }
};
