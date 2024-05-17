import "./questionBody.css";

// eslint-disable-next-line react/prop-types
function QuestionBody({ counter, media, question }) {

  
  return (
    <div className="question-body">
        <div className="countdown">
          <span>{counter}</span>
        </div>
      <div className="body-top">
        <img className="question-image" src={media} alt="cin seddi" />
      </div>
      <p className="quesiton-text">{question}</p>
    </div>
  );
}

export default QuestionBody;
