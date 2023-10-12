/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import ButtonJCH from "./ButtonJCH"

const QuestionJCH = ({ question, onAnswerClick, showResult }) => {

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [shouldReset, setShouldReset] = useState(false);

    const handleAnswerClick = (answer) => {
        if (shouldReset) {
            // Si se debe reiniciar, no procesar la respuesta
            return;
        }
        setSelectedAnswer(answer);
        onAnswerClick(answer.correct);
    };

    const resetQuestion = () => {
        setSelectedAnswer(null);
        setShouldReset(false);
    };

    useEffect(() => {
        if (showResult) {
            // Cuando se muestra el resultado, marca si la respuesta es incorrecta y debe reiniciar
            if (selectedAnswer && !selectedAnswer.correct) {
                setShouldReset(true);
            }
        }
    }, [showResult, selectedAnswer]);


    return (
        <div>
            <h2>{question.question}</h2>
            {question.answers.map((answer, index) => (
                <div key={index}>
                    <ButtonJCH
                        text={answer.text}
                        onClick={() => handleAnswerClick(answer)}
                        isCorrect={answer.correct}
                        showResult={showResult}
                        selected={answer === selectedAnswer}
                    />
                </div>
            ))}
            {showResult && !selectedAnswer && (
                <p>¡Debes seleccionar una respuesta!</p>
            )}
            {showResult && shouldReset && (
                <button onClick={resetQuestion}>Reiniciar Pregunta</button>
            )}
        </div>
    )
}

export default QuestionJCH