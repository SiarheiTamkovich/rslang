import { Routes, Route } from 'react-router-dom';

import { Home }         from "./pages/Home";
import { About }        from "./pages/About";
import { Blog }         from "./pages/Blog";
import { Single }       from "./pages/Single";
import { TextbookPage } from "./pages/TextbookPage";
import { WordsPage }    from "./pages/WordsPage";
import { AudioCallPage }       from './pages/AudioCallPage';
import { SearchMovies } from "./pages/SearchMoviesRedux";
import { AboutMovie }   from './components/SearchMovies/AboutMovie/AboutMovie';
import { Favorite }     from './components/SearchMovies/Favorite/Favorite';
import { Page404 }      from "./pages/Page404";

import { Layout }       from "./components/Layout";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Single />} />
          <Route path="textbook" element={<TextbookPage />} />
          <Route path="words-list" element={<WordsPage />} />
          <Route path="audio-call" element={<AudioCallPage />} />
          <Route path="search-movies" element={<SearchMovies />} />
          <Route path="search-movies/:id" element={<AboutMovie />} />
          <Route path="search-movies/favorite" element={<Favorite />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  )
}


