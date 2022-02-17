import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../store/users/actionUsers';
import './LoginPage.scss'

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/';

  const dispatch = useDispatch();
  const userSelector = useSelector(state => state.users[0]);
  const [user, setUser] = useState(userSelector.userName);
  const [password, setPassword] = useState(userSelector.userPass);

  const handlerSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    if (form.username.value !== user) setUser(form.username.value);
    if (form.password.value !== password) setPassword(form.password.value);
    if (form.username.value === userSelector.userName &&
      form.password.value === userSelector.userPass) {
      dispatch(loginUser(form.username.value))
      navigate(fromPage);
    }
  }

  const userLogout = () => {
    dispatch(logoutUser(userSelector.userName))
  }


  return (
    <div>
      <h1 className='login-page-title'>Регистрация пользователя</h1>
      {user === userSelector.userName ? null : "Пользователя с таким именем не существует!"}
      {password === userSelector.userPass ? null : "Пароль не правильный!"}
      {!userSelector.isLogin ?
        (
          <form onSubmit={handlerSubmit}>
            <label>
              Name: <input name="username" />
            </label>
            <label>
              Pass: <input type="password" name="password" />
            </label>
            <button className="btn btn-outline-success" type="submit">Вход</button>
          </form>
        ) : (
          <button className="btn btn-outline-success" onClick={userLogout}>Выход</button>
        )
      }
    </div>
  )
}