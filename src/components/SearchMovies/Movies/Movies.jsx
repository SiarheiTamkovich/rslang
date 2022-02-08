import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../../store/movie/movieFetchAction';
import { Loader } from '../Loader/Loader';
import { Card } from "./Card/Card";

export function Movies() {
  const dispatch = useDispatch();
  const movieSelector = useSelector(state => state.movie);
  
  const url = new URL(window.location.href); // parse for reload page
  const search = url.searchParams.get('title');

  if (movieSelector.length === 0 && !search) dispatch(fetchMovie('terminator','all', 1));
  if (movieSelector.length === 0 && !!search) dispatch(fetchMovie(search, 'all', 1));
  if (movieSelector.Response === 'False') return <h1>Movie not found</h1>;
  
  return (
    <>
      {!movieSelector.Response ? <Loader /> : <Card />}
    </>
  );
}