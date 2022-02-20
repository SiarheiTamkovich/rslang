import "./AudioCall.scss"

export const AudioCall = () => {
  
  return (
    <>
      <div className="audio-call-container">
        <h1>It is AudioCall task</h1>
      </div>
      <div className="question"></div>
      <div className="result"></div>
      <div className="answer-block hidden">
        <div className="answer"></div>
        <div className="answer"></div>
        <div className="answer"></div>
        <div className="answer"></div>
      </div>
      <div class="button">Start!</div>
    </>
  )
}