/* eslint-disable react/prop-types */

import {useState,useEffect} from "react";
import QuizAppText from "../QuizAppText/QuizAppText";
import "./resultList.css";
import App from "../../App";

function ResultList({ userResultList }) {
  const [tryAgain, setIsTryAgain] = useState(false);
  const [trueNumber , setTrueNumber] = useState(0);
  const [emptyNumber , setEmptyNumber] = useState(0);
  const [falseNumber , setfalseNumber] = useState(0);
  
  
  
  const trueQuestionNumbers = (arr) =>{
    let counter = 0;
    arr.forEach((item) => {
      if(item.isTrue){
        counter ++
      }
    })
    return counter;
  }
  
  const emptyQuestionNumbers = (arr) =>{
    let counter = 0;
    arr.forEach((item) => {
      if(item.isEmpty){
        counter ++
      }
    })
    return counter;
  }
  
  useEffect(() => {
    userResultList.shift();
    setTrueNumber(trueQuestionNumbers(userResultList))
    setEmptyNumber(emptyQuestionNumbers(userResultList))
    setfalseNumber(10 - emptyQuestionNumbers(userResultList) - trueQuestionNumbers(userResultList))
  },[])
  
  if (!tryAgain) {
    return (
      <div>
        <div className="result-info">
          <h1>Toplam Doğru Sayısı : {trueNumber }</h1>
          <h1>Toplam Yanlış Sayısı : { falseNumber }</h1>
          <h1>Toplam Boş Sayısı : {emptyNumber }</h1>
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
                  // boxShadow: item.isTrue
                  //   ? "0 0 30px #008000"
                  //   : "0 0 30px #ff0000",

                    boxShadow: item.isEmpty ? "0 0 30px #ffffff" :item.isTrue ? "0 0 30px #008000" : "0 0 30px #ff0000" 
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
                  <p>Sonuç : {item.isEmpty ? "Boş" :item.isTrue ? "Doğru" : "Yanlış" }</p>
                  
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
