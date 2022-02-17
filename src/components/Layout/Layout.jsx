import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Layout.scss';

const Layout = () => {
  const userLogin = useSelector(state => state.users[0].isLogin);

  return (
    <>
      <header>
        <div>
          <i className="bi bi-list"></i>
        </div>
        <div>
          <Link to="/">Главная</Link>
          <Link to="/textbook">Учебник</Link>
          <Link to="/words-list">Слова</Link>
          <Link to="/audio-call">Аудиовызов</Link>
          <Link to="/search-movies">SearchMovies</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          {!userLogin ? (
              <Link to="/login">Вход <i className="bi bi-box-arrow-in-right"></i></Link>
            ) : (
              <Link to="/login">Выход <i className="bi bi-box-arrow-left"></i></Link>
            )
          }
        </div>
      </header>
      
      <main className="container">
        <Outlet />
      </main>

      <footer className="footer-container">
        <span>© 2022 by Team 19</span>
        <i className="bi bi-github"></i>
      </footer>
    </>
  )
}

export {Layout}