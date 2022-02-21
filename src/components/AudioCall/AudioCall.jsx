import { useSelector } from 'react-redux';
import { Script } from './Script'
import "./AudioCall.scss"

export const AudioCall = () => {
  
  const wordsSelector = useSelector(state => state.words[0]);
  localStorage.setItem('group',wordsSelector.group);
  localStorage.setItem('page',wordsSelector.page);

  return (
    <div className="audio-call-container">
      <h1>Игра "Аудиовызов"</h1>
      <div className="wrapper">
        <div className="reset hidden"></div>
        <div className="question-ac"></div>
        <div className="result hidden"></div>
        <div className="answer-block hidden">
          <div className="answer"></div>
          <div className="answer"></div>
          <div className="answer"></div>
          <div className="answer"></div>
        </div>
        <div className="button-audio-call" onClick={Script} >Start!</div>
      </div>
    </div>
  )
}
