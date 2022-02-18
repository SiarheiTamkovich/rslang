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
    <div className="login-page-container">
      {user === userSelector.userName ? null : "Пользователя с таким именем не существует!"}
      {password === userSelector.userPass ? null : "Пароль не правильный!"}
      {!userSelector.isLogin ?
        (
          <>
            <h1 className='login-page-title'>Регистрация пользователя</h1>
            <form className="login-form" onSubmit={handlerSubmit}>
              <label>
                Имя: <input name="username" className="form-control"/>
              </label>
              <label>
                Пароль: <input type="password" name="password" className="form-control"/>
              </label>
              <button className="btn btn-secondary" type="submit">Вход</button>
            </form>
          </>
        ) : (
          <>
            <h1 className='login-page-title'>Для выхода нажмите:</h1>
            <button className="btn btn-secondary" onClick={userLogout}>Выход</button>
          </>
        )
      }
    </div>
  )
}