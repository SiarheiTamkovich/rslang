import { Script } from './Script'
import "./Sprint.scss";

export const Sprint = () => {

  return (
    <div className="sprint-container">
      <h1>Игра Спринт</h1>
      <div className="wrapper-sp">
        <div className="reset hidden"></div>
        <div className="topSection">
          <div className="timer"></div>
          <div className="score"></div>
        </div>
        <div className="question">
          <div className="correctSound"></div>
          <div className="questionNotT"></div>
          <div className="questionT"></div>
        </div>
        <div className="result hidden"></div>
        <div className="answer-block hidden">
          <div className="unCorrect-sp">Неверно!</div>
          <div className="correct-sp">Верно!</div>
        </div>
        <div className="button-sp" onClick={Script}>Start!</div>
      </div>
    </div>
  )
}

