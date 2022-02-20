
import "./Sprint.scss";

export const Sprint = () => {

  return (
    <div className="wrapper">
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
        <div className="unCorrect">Неверно!</div>
        <div className="correct">Верно!</div>
      </div>
      <div className="button-sp">Start!</div>
  </div>
  )
}

