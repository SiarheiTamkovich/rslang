import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovie } from '../../../store/movie/movieFetchAction';

import "./Search.scss"

export const Search = () => {
  const dispatch = useDispatch();
  const url = new URL(window.location.href);
  const favoriteSelector = useSelector(state => state.movie_favorite);

  const onClickSubmit = (event) => {
    const searchValue = event.target.parentNode.childNodes[0].childNodes[0].value;
    if (searchValue.trim() === '') return;

    url.searchParams.set('title', searchValue);
    // modify the URL without reloading the page using the Location API
    // history.replaceState(data,title,url)
    window.history.replaceState({page:5},'JavaScript', url.href); 

    const formRadio = document.getElementById('radio');
    const typeValue = formRadio.elements['type'].value;

    dispatch(fetchMovie(searchValue, typeValue, 1));
  }
  const onKeyUpEnter = (event) => {
    if (event.key === 'Enter') {
      const searchValue = event.target.value;
      if (searchValue.trim() === '') return;

      url.searchParams.set('title', searchValue);
      window.history.replaceState({page:5},'JavaScript', url.href); 

      const formRadio = document.getElementById('radio');
      const typeValue = formRadio.elements['type'].value;

      dispatch(fetchMovie(searchValue, typeValue, 1));
    }
  }
  const onChangeRadio = (event) => {
    const typeValue = event.target.value;
    url.searchParams.set('type', typeValue);
    window.history.replaceState({page:5},'JavaScript', url.href); 
    dispatch(fetchMovie(
      url.searchParams.get('title'), 
      url.searchParams.get('type'), 
      url.hash.slice(1) || 1
    ));
  }

  return (
    <>
    <div className="row">
      <div className="input-field input-movie col s12">
        <input
            onKeyUp= {onKeyUpEnter} 
            type="search"
            placeholder="For example — terminator"
            defaultValue={url.searchParams.get('title')}
            autoFocus
        />
      </div>
      <form className='form-radio' id='radio'>
        <label className="label-btn-movie">
          <input className="with-gap form-check-input"
            onChange={onChangeRadio}
            type="radio"
            name="type"
            value="all"
          />
          <span>All</span>
        </label>
        <label className="label-btn-movie">
          <input className="with-gap form-check-input"
            onChange={onChangeRadio}
            type="radio"
            name="type"
            value="movie"
          />
          <span>Movies</span>
        </label>
        <label className="label-btn-movie">
          <input className="with-gap form-check-input"
            onChange={onChangeRadio}
            type="radio"
            name="type"
            value="series"
          />
          <span>Series</span>
        </label>
        <label className="label-btn-movie">
          <input className="with-gap form-check-input"
            onChange={onChangeRadio}
            type="radio"
            name="type"
            value="game"
          />
          <span>Games</span>
        </label>
      </form>
      <button
        className="btn btn-search-movie btn-outline-primary"
        onClick={onClickSubmit}
        >
        Search
      </button>
    </div>
    <div className='favorite-forms'>
      <input className="form-check-input"
        type="checkbox"
        value="" 
      />
      <span className='filter-text'>Action</span>
      <input className="form-check-input"
        type="checkbox"
        value="" 
      />
      <span className='filter-text'>Comedy</span>
      <input className="form-check-input"
        type="checkbox"
        value="" 
      />
      <span className='filter-text'>Romance</span>
      <input className="form-check-input"
        type="checkbox"
        value="" 
      />
      <span className='filter-text'>Fantasy</span>
      <input className="form-check-input"
        type="checkbox"
        value="" 
      />
      <span className='filter-text'>Adventure</span>
      <input className="form-check-input"
        type="checkbox"
        value="" 
      />
      <span className='filter-text'>Documentary</span>
      <Link to={'./favorite'}>
        <button className="btn btn-open-favorite btn-outline-primary">
          Favorite: {favoriteSelector.length} movies
        </button>
      </Link>
    </div>
    </>
  );
}