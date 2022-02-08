import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Главная</Link>
        <Link to="/textbook">Учебник</Link>
        <Link to="/words-list">Слова</Link>
        <Link to="/audio-call">Аудиовызов</Link>
        <Link to="/search-movies">SearchMovies</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </header>
      
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer-container">© 2022 by Team 19 </footer>
    </>
  )
}

export {Layout}