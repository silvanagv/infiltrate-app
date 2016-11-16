export default function worksReducer(state=[], action) {
  switch (action.type) {
    case 'FETCH_WORKS':
      return action.payload;
    case 'ADD_WORK':
      return [...state, action.payload]
    case 'UPDATE_WORK':
      return [...state];
    case 'DELETE_WORK':
      return state.filter(work => work.id !== action.payload);
    default:
      return state;
  }
};
