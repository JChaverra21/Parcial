import { useEffect, useState } from "react";
import QuestionJCH from "./components/QuestionJCH";


const data = [
  {
    id: 1,
    question: "¿Cuándo se inventó la escritura?",
    answers: [
      {
        text: "Hace 20 mil años.",
        correct: false,
      },
      {
        text: "En el IV milenio a.C.",
        correct: false,
      },
      {
        text: "En el año 0.",
        correct: true,
      },
      {
        text: "Siglo XX",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Según las leyendas de la antiguedad, ¿quiénes fundaron a Roma?",
    answers: [
      {
        text: "Rómulo y Remo.",
        correct: true,
      },
      {
        text: "Alejandro Magno y Ptolomeo.",
        correct: false,
      },
      {
        text: "Aquiles y Odiseo.",
        correct: false,
      },
      {
        text: "Cesar Augustu",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question:
      "¿Cuál de estos emperadores fue alumno del filósofo griego Aristóteles?",
    answers: [
      {
        text: "Carlomagno",
        correct: false,
      },
      {
        text: "Trajano",
        correct: false,
      },
      {
        text: "Cesar",
        correct: false,
      },
      {
        text: "Alejandro Magno",
        correct: true,
      },
    ],
  },
];

const AppJCH = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  useEffect(() => {
    setShowResult(false);
  }, [currentQuestion]);

  return (
    <div>
      <h1>Preguntas</h1>
      {currentQuestion < data.length ? (
        <QuestionJCH
          question={data[currentQuestion]}
          onAnswerClick={handleAnswerClick}
          showResult={showResult}
        />
      ) : (
        <p>Prueba realizada</p>
      )}
    </div>
  );
}

export default AppJCH