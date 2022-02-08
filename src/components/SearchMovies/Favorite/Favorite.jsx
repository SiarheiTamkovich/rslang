import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import noImg from '../Movies/Card/no-image.png';
import "../Movies/Card/Card.scss"

export const Favorite = () => {
  const movieSelector = useSelector(state => state.movie_favorite);
  if (movieSelector.length === 0) return <h2 className="no-movies"> No movies favorite</h2>;
  
  return (
    <div className="movies">
      {movieSelector.map(elem => 
      <div key={elem.imdbID} className="card" data-card-id={elem.imdbID}>
        <div className="card-image waves-effect waves-block waves-light">
        {elem.Poster !== 'N/A' ? (
            <img
              className="activator"
              src={elem.Poster}
              alt=""
            />
          ) : (
            <img
              className="activator image-no"
              src={noImg}
              width={200}
              height={200}
              alt=""
            />
          )}
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {elem.Title}
          </span>
          <p>
            <span>{elem.Year}, {elem.Type}</span>
            <Link to={`/search-movies/${elem.imdbID}`} className="right">
              Read more
            </Link>
          </p>  
        </div>
      </div>
      )}
    </div>
  );
}