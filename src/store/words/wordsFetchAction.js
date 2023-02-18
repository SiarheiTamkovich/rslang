const loadWordsAction = (payload) => ({
  type: 'LOAD_WORDS',
  payload,
});

const mainURL = 'https://react-rslang-be-production-bd97.up.railway.app/';

export const fetchWords = (group, page) => {

  let url = mainURL + `words?group=${group}&page=${page}`;
//  console.log(url)
  return function(dispatch) {
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(loadWordsAction(json)))
  }
}
