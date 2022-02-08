import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import noImg from './no-image.png';
import "./Card.scss"

export function Card() {
  const movieSelector = useSelector(state => state.movie.Search);
//console.log(movieSelector)

  return (
    movieSelector.map(elem => 
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
            // src={`https://via.placeholder.com/300x430.png?text=
            //   ${elem.Title.replace(/^a-z0-9 /i, '').replace(/\s/, '+')}`}
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
    )
  );
}