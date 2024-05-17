/* eslint-disable react/prop-types */

import {useState} from "react";
import QuizAppText from "../QuizAppText/QuizAppText";
import "./resultList.css";
import App from "../../App";

function ResultList({ trueQuestionNumber, userResultList }) {
  const [tryAgain, setIsTryAgain] = useState(false);
  userResultList.shift();

  if (!tryAgain) {
    return (
      <div>
        <div className="result-info">
          <h1>Toplam Doğru Sayısı : {trueQuestionNumber }</h1>
          <h1>Toplam Yanlış veya Boş Sayısı : {10 - trueQuestionNumber}</h1>
          <div className="try-again">
            <button className="try-again-button" onClick={() => setIsTryAgain(true)}>Tekrar Dene</button>
          </div>
        </div>
        <div></div>
        <QuizAppText />
        <div className="results">
          {userResultList.map((item, index) => {
            return (
              <div
                key={index}
                className="result-content"
                style={{
                  // backgroundColor: item.isTrue ? "green" : "red",
                  boxShadow: item.isTrue
                    ? "0 0 30px #008000"
                    : "0 0 30px #ff0000",
                }}
              >
                <div className="result-item result-question">
                  <p> Soru : {item.question}</p>
                </div>
                <hr />
                <div className="result-item result-answers">
                  <p>Sizin Cevabınız : {item.userAnswer}</p>{" "}
                  <p>Doğru Cevap : {item.answer}</p>
                </div>
                <hr />

                <div className="result-item result-true-false">
                  <p>Sonuç : {item.isTrue ? "Doğru" : "Yanlış"}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <App />;
  }
}

export default ResultList;
