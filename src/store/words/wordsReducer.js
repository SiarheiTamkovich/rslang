const initialState = [];

export const wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_WORDS':
      return action.payload; 
    default:
      return state;
  }
}

