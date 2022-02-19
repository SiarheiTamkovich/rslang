import { useSelector } from 'react-redux';
import './Cards.scss';

export const Cards = (page) => {
  const wordsSelector = useSelector(state => state.words)
  let key = 0;
  console.log(wordsSelector)

  return (
    <div className="cards-container" >
      {wordsSelector.map(elem =>
        <div className='word-card' key={key++}>
          <img src={`https://react-learnwords-example.herokuapp.com/${elem.image}`} alt={elem.word} className="card-img"></img>
          <div className="card-description">
            <div className="card-wrapper">
              <h3 className="eng-word">{elem.word}</h3>
              <audio src={`https://react-learnwords-example.herokuapp.com/${elem.audio}`} controls></audio>
              <h5 className="word">Перевод: {elem.wordTranslate}</h5>
              <h5 className="word">Транскрипция: {elem.transcription}</h5>
              <p className="word-about">{elem.textExample}</p>
              <audio src={`https://react-learnwords-example.herokuapp.com/${elem.audioExample}`} controls></audio>
              <p className="word-about">{elem.textExampleTranslate}</p>
              <p className="word-about">{elem.textMeaning}</p>
              <audio src={`https://react-learnwords-example.herokuapp.com/${elem.audioMeaning}`} controls></audio>
              <p className="word-about">{elem.textMeaningTranslate}</p>
            </div>
          </div>
          <button className="btn-add-word btn btn-secondary">Добавить в слова</button>
        </div>
      )}
    </div>
  )
}