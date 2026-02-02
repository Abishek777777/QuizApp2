import { useState } from "react";
import questions from "./data/questions";
import Question from "./components/Question";
import Result from "./components/Result";
import "./App.css";

function App() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // check answer
  const handleAnswer = (option) => {
    if (option === questions[currentIndex].answer) {
      setScore(score + 1);
    }

    const nextIndex = currentIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setShowResult(true);
    }
  };

  // restart quiz
  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="app">
      <h1>React Quiz App</h1>

      {!showResult ? (
        <Question
          data={questions[currentIndex]}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Result
          score={score}
          total={questions.length}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;
