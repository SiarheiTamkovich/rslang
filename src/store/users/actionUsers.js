export const loginUser = (name) => ({
  type: 'LOGIN_USER',
  name,
})

export const logoutUser = (name) => ({
  type: 'LOGOUT_USER',
  name,
})