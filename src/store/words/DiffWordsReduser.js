const initialState = [];

export const DiffWordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WORDS':
      return [...state, ...action.payload]; 
    case 'REMOVE_WORDS':
      return state.filter(item => item.id !== action.payload)
    default:
      return state;
  }
}