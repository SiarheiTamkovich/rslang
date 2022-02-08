import { loadAction } from "../notes/actionsNotes"

export const fetchNotes = () => {
  return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
      .then(response => response.json())
      .then(json => dispatch(loadAction(json)))
  }
}