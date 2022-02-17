import { Link, Outlet } from 'react-router-dom';
import './Layout.scss';

const Layout = () => {
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
          <Link to="/login">Вход <i className="bi bi-box-arrow-in-right"></i></Link>
        </div>
      </header>
      
      <main className="container">
        <Outlet />
      </main>

      <footer className="footer-container">
        © 2022 by Team 19 
      </footer>
    </>
  )
}

export {Layout}