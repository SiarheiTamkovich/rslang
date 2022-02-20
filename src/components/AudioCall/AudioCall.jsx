import { Script } from './Script'
import "./AudioCall.scss"

export const AudioCall = () => {
  
  return (
    <>
      <div className="audio-call-container">
        <h1>It is AudioCall task</h1>
      </div>
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
    </>
  )
}
