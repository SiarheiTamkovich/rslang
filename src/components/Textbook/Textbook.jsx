import { useDispatch } from 'react-redux';
import { fetchWords } from '../../store/words/wordsFetchAction';
import { Cards } from './Cards/Cards';
import { PaginatedItems } from './Paginator/Paginator';
import "./Textbook.scss";

let group = 0;
let page = 0;

export function Textbook(){
  const dispatch = useDispatch();

  const onClickLoadWords = (event) => {
    group = (event.target.dataset.group)
    dispatch(fetchWords(group, page));
  }

  return (
    <>
      <div className="words-container">
        <h1>Выберите раздел</h1>
        <div className="btn-group">
          <button className="btn btn-secondary" data-group="0" onClick={onClickLoadWords}>Раздел 1</button>
          <button className="btn btn-secondary" data-group="1" onClick={onClickLoadWords}>Раздел 2</button>
          <button className="btn btn-secondary" data-group="2" onClick={onClickLoadWords}>Раздел 3</button>
          <button className="btn btn-secondary" data-group="3" onClick={onClickLoadWords}>Раздел 4</button>
          <button className="btn btn-secondary" data-group="4" onClick={onClickLoadWords}>Раздел 5</button>
          <button className="btn btn-secondary" data-group="5" onClick={onClickLoadWords}>Раздел 6</button>
        </div>
        <Cards page={0} />
        <div className="paginator-container">
          <PaginatedItems itemsPerPage={20} /> 
        </div>
      </div>
    </>
  )
}



