import { Routes, Route } from 'react-router-dom';

import { Home }          from "./pages/Home";
import { AboutPage }     from "./pages/AboutPage";
import { Stat }          from "./pages/Stat";
import { Single }        from "./pages/Single";
import { TextbookPage }  from "./pages/TextbookPage";
import { WordsPage }     from "./pages/WordsPage";
import { AudioCallPage } from './pages/AudioCallPage';
import { SprintPage }    from './pages/SprintPage';
import { Page404 }       from "./pages/Page404";
import { LoginPage }     from './pages/LoginPage';
import { RequireAuth }   from './components/RequireAuth/RequireAuth';

import { Layout }        from "./components/Layout/Layout";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="stat" element={<Stat />} />
          <Route path="blog/:id" element={<Single />} />
          <Route path="textbook" element={<TextbookPage />} />
          <Route path="words-list" element={
            <RequireAuth>
              <WordsPage />
            </RequireAuth>
          } />
          <Route path="audio-call" element={<AudioCallPage />} />
          <Route path="sprint" element={<SprintPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  )
}
