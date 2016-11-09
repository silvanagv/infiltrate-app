export default function worksReducer(state=[], action) {
  switch (action.type) {
    case 'FETCH_WORKS':
      return action.payload;
    case 'ADD_WORK':
      return [...state, action.payload]
    default:
      return state;
  }
};
