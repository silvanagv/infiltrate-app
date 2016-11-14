export default function educationsReducer(state=[], action) {
  switch (action.type) {
    case 'FETCH_EDUCATIONS':
      return action.payload;
    case 'ADD_EDUCATION':
      return [...state, action.payload];
    case 'UPDATE_EDUCATION':
      return [...state]
    default:
      return state;
  }
};
