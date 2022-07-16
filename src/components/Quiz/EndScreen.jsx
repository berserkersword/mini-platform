import { useContext } from 'react';
import { toast } from 'react-toastify';
import { Context } from '../../context/context';
import "./Quiz.scss";
const EndScreen = ({ quiz }) => {
    // const time = new Date()
    const { score, setQuizMode } = useContext(Context);
    if (Math.trunc(score / quiz.length * 100) >= 70) {
        toast.success('Congratulations 😊😊😊👍')
    }
    if (Math.trunc(score / quiz.length * 100) >= 50 && Math.trunc(score / quiz.length * 100) < 70) {
        toast.dark('🙂🙂🙂🙂')
    }
    if (Math.trunc(score / quiz.length * 100) >= 0 && Math.trunc(score / quiz.length * 100) < 50) {
        toast.error('😱😭😭😭');
    }
    return (
        <div className='wrapper'>
            <div className="quiz">
                <div className="quiz-title">
                    <h1>Your Score is {score}</h1>
                </div>
                <div onClick={() => setQuizMode('menu')} className="submit">Try Again</div>
            </div>
        </div>
    )
}

export default EndScreen