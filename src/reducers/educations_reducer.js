export default function educationsReducer(state=[], action) {
  switch (action.type) {
    case 'FETCH_EDUCATIONS':
      return action.payload;
    case 'ADD_EDUCATION':
      return [...state, action.payload];
    case 'UPDATE_EDUCATION':
      return [...state];
    case 'DELETE_EDUCATION':
      return state.filter(education => education.id !== action.payload);
    default:
      return state;
  }
};
