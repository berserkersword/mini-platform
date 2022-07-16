import { useContext, useEffect, useState } from 'react'
import EndScreen from '../../components/Quiz/EndScreen';
import Quiz from '../../components/Quiz/Quiz';
import { Context } from '../../context/context';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import "./Quiz-page.scss";
const Quizpage = () => {

    const { quizMode, setQuizMode } = useContext(Context)
    const [quiz, setQuiz] = useState({})
    useEffect(() => {
        const postCollectionRef = collection(db, 'test');
        const getPost = async () => {
            try {
                const data = await getDocs(postCollectionRef);
                setQuiz(data.docs.map(doc => ({ ...doc.data() })));
            } catch (err) {
                console.log(err);
            }
        }
        getPost()
    }, [])
    return (
        <div className='quiz-page'>
            {quizMode === 'menu' ? <button className='start-quiz' onClick={() => setQuizMode('quiz')}>Start Quize</button> : null}
            {quizMode === 'quiz' ? <Quiz quiz={quiz} /> : null}
            {quizMode === 'end' ? <EndScreen quiz={quiz} /> : null}
        </div>
    )
}

export default Quizpage