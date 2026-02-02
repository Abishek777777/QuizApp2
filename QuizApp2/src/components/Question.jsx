function Question({ data, handleAnswer }) {
  return (
    <div className="question-box">
      <h2>{data.question}</h2>

      {data.options.map((option, index) => (
        <button
          key={index}
          className="option-btn"
          onClick={() => handleAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Question;
