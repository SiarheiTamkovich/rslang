const initialState = [];

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [...state, {...action.payload}]; 
    case 'REMOVE_MOVIE':
      return state.filter(item =>
        (item.imdbID !== action.payload.imdbID) 
      );
    default:
      return state;
  }
}