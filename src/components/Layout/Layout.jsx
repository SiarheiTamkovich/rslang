import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import rsscool from '../../img/rs_school_js.svg'
import './Layout.scss';

const Layout = () => {
  const userLogin = useSelector(state => state.users[0].isLogin);

  return (
    <>
      <header>
        <div>
          <i className="bi bi-list"></i>
        </div>
        <div className="nav-menu">
          <Link to="/">Главная</Link>
          <Link to="/textbook">Учебник</Link>
          <Link to="/words-list">Слова</Link>
          <Link to="/audio-call">Аудиовызов</Link>
          <Link to="/search-movies">Поиск</Link>
          <Link to="/about">О команде</Link>
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
        <a href="https://app.rs.school/" target="_blank" rel="noreferrer">
          <img src={rsscool} alt="rs-scool" className="rsscool-img"></img>
        </a>
        <span>© 2022 by Team 19</span>
        <a href="https://github.com/SiarheiTamkovich/rslang" target="_blank" rel="noreferrer">
          <i className="bi bi-github"></i>
        </a>
      </footer>
    </>
  )
}

export {Layout}