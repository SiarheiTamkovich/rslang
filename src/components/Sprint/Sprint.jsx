
import "./Sprint.scss";

export const Sprint = () => {

  return (
    <div className="sprint-container">
      <div className="topSection">
        <div className="timer"></div>
        <div className="score"></div>
      </div>
      <div className="question">
        <div className="correctCount">
          <div className="count"></div>
          <div className="count"></div>
          <div className="count"></div>
        </div>
        <div className="correctSound"></div>
        <div className="questionNotT"></div>
        <div className="questionT"></div>
      </div>
      <div className="result"></div>
      <div className="answer-block">
        <div className="unCorrect">Неверно!</div>
        <div className="correct">Верно!</div>
      </div>
      <div className="button">Start!</div>
    </div>
  )
}