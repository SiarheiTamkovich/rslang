import { useDispatch, useSelector } from 'react-redux';
import { 
  addNotesAction, 
  toggleAction, 
  editAction, 
  delateAction, 
} from '../../store/notes/actionsNotes';
import { fetchNotes } from '../../store/notes/fetchNotes';
import './AddNotes.scss';

export const AddNotes = () => {
  const dispatch = useDispatch();
  const notesSelector = useSelector(state => state.notes);
//  console.log(notesSelector)
  
  const btnSubmit = document.getElementById('btnSubmit');

  let input;
  const addItem = (event) => {
    event.preventDefault();
    if(input.value) dispatch(addNotesAction(input.value));
    input.value = '';
    if(btnSubmit && btnSubmit.innerHTML !== 'Add Note') btnSubmit.innerHTML = 'Add Note';
  }

  const toggleItem = (event) => {
    dispatch(toggleAction(Number(event.target.parentNode.id)))
  }

  const editItem = (event) => {
    input.value = event.target.parentNode.parentNode.childNodes[1].innerHTML;
    btnSubmit.innerHTML = 'Edit Note';
    dispatch(editAction(Number(event.target.parentNode.parentNode.id) || 
      Number(event.target.parentNode.id)))
  }

  const delateItem = (event) => {
    dispatch(delateAction(Number(event.target.parentNode.parentNode.id) || 
    Number(event.target.parentNode.id)))
  }

  return (
    <div className='notes-container'>
      <form className='notes-form' onSubmit={addItem}>
        <input ref={node => input = node}/>
        <button className='btn btn-outline-light' type="submit" id="btnSubmit">Add Note</button>
        <button className='btn btn-outline-light' 
          onClick={() => dispatch(fetchNotes())}>
            Load Nots
        </button>
      </form>
      <ul>
        {notesSelector.map(item => {
          return (
            <li key={item.id} id={item.id} className='notes-items'>
              <input 
                className="form-check-input" 
                type="checkbox" 
                onChange={toggleItem} 
                defaultChecked={item.isCompleted}>
              </input>
              <span className={item.isCompleted ? 'notes-text completed' : 'notes-text'} >
                {item.title}
              </span>
              <button className="btn btn-outline-light" onClick={editItem}>
                <i className="bi bi-pencil-square"></i>
              </button>
              <button className="btn btn-outline-light" onClick={delateItem}>
                <i className="bi bi-trash-fill"></i>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
