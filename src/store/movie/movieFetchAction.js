const loadMovieAction = (payload) => ({
  type: 'LOAD_MOVIE',
  payload,
});
const mainURL = 'http://www.omdbapi.com/';
const apiKey = '6cb20a41';

export const fetchMovie = (search, type, page) => {

  type === 'all' ? type = '' : type = '&type=' + type;

  let url = mainURL + `?apikey=${apiKey}&s=${search}${type}&page=${page}&plot=full`;
//  console.log(url)
  return function(dispatch) {
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(loadMovieAction(json)))
  }
}

const loadAboutMovieAction = (payload) => ({
  type: 'LOAD_ABOUT_MOVIE',
  payload,
})

export const fetchAboutMovie = (id) => {
  let url = mainURL + `?apikey=${apiKey}&i=${id}&plot=full`;
  return function(dispatch) {
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(loadAboutMovieAction(json)))
  }
}

export const loadFavoriteAction = (payload) => ({
  type: 'LOAD_FAVORITE',
  payload,
})
