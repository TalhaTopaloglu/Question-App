/* eslint-disable react/prop-types */
import "./options.css";
const optionLetters = ["A", "B", "C", "D"];

function Options({ optionIsVisible, handleClickOption, questionOption }) {
  return (
    <div
      className="options"
      style={{
        transform: !optionIsVisible ? "translateY(100px)" : "translateY(0)",
        opacity: !optionIsVisible ? "0" : "1",
        transition: "all 2s",
      }}
    >
      <ul className="option-list">
        {optionIsVisible &&
          questionOption.map((item, index) => (
            <li
              onClick={handleClickOption}
              className="option-list-item"
              key={index}
            >
              <span>
                {optionLetters[index]}: {item}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Options;
