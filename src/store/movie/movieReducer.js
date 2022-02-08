const initialState = [];

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_MOVIE':
      return {...state, ...action.payload}; 
    case 'LOAD_FAVORITE':
      console.log(state)
      return {...state, ...action.payload};
    default:
      return state;
  }
}

export const movieAboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_ABOUT_MOVIE':
      return {...state, ...action.payload}; 
    default:
      return state;
  }
}
