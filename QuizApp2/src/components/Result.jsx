function Result({ score, total, restartQuiz }) {
  return (
    <div className="result-box">
      <h2>Quiz Finished 🎉</h2>
      <p>Your Score: {score} / {total}</p>

      <button className="restart-btn" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;
