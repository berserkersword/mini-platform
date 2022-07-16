import { useState, useContext } from 'react';
import { Context } from '../../context/context'
import './Quiz.scss';
const Quiz = ({ quiz }) => {
    const { score, setScore, setQuizMode } = useContext(Context);
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [optionChoosen, setOptionChoosen] = useState('')
    // console.log(quiz);
    const nextQuestion = () => {
        if (quiz[currentQuestion].answer === optionChoosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1)
    }
    const finishQuestions = () => {
        if (quiz[currentQuestion].answer === optionChoosen) {
            setScore(score + 1);
        }
        setQuizMode('end')
    }
    return (
        <div className='wrapper'>
            <div className="quiz">
                <div className="quiz-title"><h1>{quiz[currentQuestion].question}</h1> <span>{currentQuestion}/{quiz.length}</span></div>
                <div className="choosen">You choosed: {optionChoosen}</div>
                <div className="options">
                    <button onClick={() => setOptionChoosen('A')}>{quiz[currentQuestion].optionA}</button>
                    <button onClick={() => setOptionChoosen('B')}>{quiz[currentQuestion].optionB}</button>
                    <button onClick={() => setOptionChoosen('C')}>{quiz[currentQuestion].optionC}</button>
                    <button onClick={() => setOptionChoosen('D')}>{quiz[currentQuestion].optionD}</button>
                </div>
                {currentQuestion === quiz.length - 1 ? <button className='submit' onClick={finishQuestions}>Finish Questions</button> : <button className='submit' onClick={nextQuestion}>Next Question</button>}
            </div>
        </div>
    )
}

export default Quiz