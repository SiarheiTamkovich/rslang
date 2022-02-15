import { useLocation, useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/';

  const handlerSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;
    const password = form.password.value;
    const isSigning = true;
    console.log(user);
    console.log(password);
    console.log(isSigning);

    navigate(fromPage)
  }

  return (
    <div>
      <h1>Login page</h1>
      {fromPage}
      <form onSubmit={handlerSubmit}>
        <label>
          Name: <input name="username" />
        </label>
        <label>
          Pass: <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}