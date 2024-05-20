import "./startInfo.css";

// eslint-disable-next-line react/prop-types
function StartInfo({ text, isVisible, handleClick }) {
  return (
    <div className="welcome">
      <h1 className="welcome-message">QUIZ APP&apos;e HOŞGELDİNİZ</h1>
      <ul className="info-list">
        <li className="info-list-item">
          Bu genel kültür testi toplam 10 sorudan oluşmaktadır.
        </li>
        <li className="info-list-item">
          Her soru için 30 saniyeniz bulunmaktadır.
        </li>
        <li className="info-list-item">
          Soruyu gördükten 10 saniye sonra şıklar açılacaktır.
        </li>
        <li className="info-list-item">
          Testin sonucunu test bittikten sonra görebilirsiniz.
        </li>
        <li className="info-list-item">Toplam süreniz: 5 dakikadır.</li>
        <li className="info-list-item">Başarılar..</li>
      </ul>
      <h1 className="info-text">{text}</h1>
      {isVisible && (
        <button className="start-button" id="start" onClick={handleClick}>
          {" "}
          Start{" "}
        </button>
      )}
    </div>
  );
}

export default StartInfo;
