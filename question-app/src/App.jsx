import "./App.css";
import Questions from "./components/Questions/Questions";
import { useState } from "react";
import QuizAppText from "./components/QuizAppText/QuizAppText";
import StartInfo from "./components/StartInfo/StartInfo";

function App() {
  const [start, setStart] = useState(false);
  const [text ,setText] = useState("Teste Başlamak İçin Butona Tıklanıyınız")
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setTimeout(() => {
      setStart(true)
    }, 3500);

    setTimeout(() => {
      setText("Test Başlıyor...")
    }, 2000);

    setTimeout(() => {
      setText("Hazır Mısın ?")
    }, 500);
    setIsVisible(false)
  };

  {
    if (!start) {
      return(
      <div className="info-screen">
        <QuizAppText />
        <StartInfo text={text}  isVisible={isVisible} handleClick={handleClick} />
      </div>
      );
    } else {
      return (
        <Questions />
      )
    }
  }
}

export default App;
