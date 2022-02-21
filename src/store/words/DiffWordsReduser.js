const initialState = [];

export const DiffWordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WORDS':
      return [...state, ...action.payload]; 
    default:
      return state;
  }
}