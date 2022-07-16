import './Create.quiz.scss';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../firebase/firebase';
import { toast } from 'react-toastify';
const CreateQuiz = () => {

  const [question, setQuestion] = useState('')
  const [optionA, setOptionA] = useState('')
  const [optionB, setOptionB] = useState('')
  const [optionC, setOptionC] = useState('')
  const [optionD, setOptionD] = useState('')
  const [answer, setAnswer] = useState('')

  const questionCollectionRef = collection(db, 'test')

  const createQuiz = async (e) => {
    try {
      await addDoc(questionCollectionRef, {
        question,
        optionA,
        optionB,
        optionC,
        optionD,
        answer
      });
      toast.dark("question success created")
    } catch (error) {
      toast.error('cannot submit this question')
    }
  }

  return (
    <div className='admin'>
      <div className="wrapper">
        <div className="input-group">
          {/* Quiz */}
          <div className="quiz">
            <label htmlFor="question">Question</label>
            <textarea id="question" placeholder='Your Question...' onChange={e => setQuestion(e.target.value)}></textarea>
          </div>
          {/* Options */}
          <div className="options">
            <div className="optionA">
              <label htmlFor="optionA">Option A</label>
              <textarea id="optionA" placeholder='optionA' onChange={e => setOptionA(e.target.value)}></textarea>
            </div>
            <div className="optionB">
              <label htmlFor="optionA">Option B</label>
              <textarea id="optionA" placeholder='optionA' onChange={e => setOptionB(e.target.value)}></textarea>
            </div>
            <div className="optionC">
              <label htmlFor="optionA">Option C</label>
              <textarea id="optionA" placeholder='optionA' onChange={e => setOptionC(e.target.value)}></textarea>
            </div>
            <div className="optionD">
              <label htmlFor="optionA">Option D</label>
              <textarea id="optionA" placeholder='optionA' onChange={e => setOptionD(e.target.value)}></textarea>
            </div>
            <div className="answer">
              <label htmlFor="answer">Your Answer:</label>
              <input type="text" id='answer' onChange={e => setAnswer(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="submit">
          <button type='submit-quiz' onClick={createQuiz}>Submit Question</button>
        </div>
      </div>
    </div>
  )
}

export default CreateQuiz