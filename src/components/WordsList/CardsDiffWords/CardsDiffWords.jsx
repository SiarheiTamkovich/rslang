import { useSelector, useDispatch } from 'react-redux';
import { RemoveDiffWords } from '../../../store/words/DiffWordsAction';

export const CardsDiff = (page) => {
  const diffWordsSelector = useSelector(state => state.diffWords)
  const dispatch = useDispatch();

  const onClickRemoveWords = (event) => {
    dispatch(
      RemoveDiffWords(
        event.target.parentNode.dataset.id
      )
    )
  }

  let key = 0;

  return (
    <div className="cards-container" >
      {diffWordsSelector.map(elem =>
        <div className='word-card' key={key++} data-id={elem.id}>
          <img src={`https://react-learnwords-example.herokuapp.com/${elem.image}`} alt={elem.word} className="card-img"></img>
          <div className="card-description">
            <div className="card-wrapper">
              <h3 className="eng-word">{elem.word}</h3>
              <audio src={`https://react-learnwords-example.herokuapp.com/${elem.audio}`} controls></audio>
              <h5 className="word">Перевод: <strong>{elem.wordTranslate}</strong></h5>
              <h5 className="word">Транскрипция: <strong>{elem.transcription}</strong></h5>
              <p className="word-about">{elem.textExample.replace('<b>', ' ').replace('</b>', ' ')}</p>
              <audio src={`https://react-learnwords-example.herokuapp.com/${elem.audioExample}`} controls></audio>
              <p className="word-about">{elem.textExampleTranslate}</p>
              <p className="word-about">{elem.textMeaning.replace('<i>', ' ').replace('</i>', ' ')}</p>
              <audio src={`https://react-learnwords-example.herokuapp.com/${elem.audioMeaning}`} controls></audio>
              <p className="word-about">{elem.textMeaningTranslate}</p>
            </div>
          </div>
            <button className="btn-add-word btn btn-secondary" onClick={onClickRemoveWords}>Удилить из списка</button>
        </div>
      )}
    </div>
  )
}