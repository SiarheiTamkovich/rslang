const initialState = [{
  id: 0, 
  isLogin: false, 
  userName: 'testuser', 
  userMail: 'test@user.ru',
  userPass: 'testpass',
}];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return state.map(item =>
        (item.userName === action.name) ? 
        {...item, isLogin: true} : item,
      );
      case 'LOGOUT_USER':
      return state.map(item =>
        (item.userName === action.name) ? 
        {...item, isLogin: false} : item,
      );
    default:
      return state;
  }
}