import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Context } from './context/context';
import CreateQuiz from './pages/CreateQuiz/CreateQuiz';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Quizpage from './pages/Quiz/Quiz-page';
import Register from './pages/Register/Register';
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import User from './pages/Person/User';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from './secure/protectedRoutes';
//localStorage.getItem('isAth');
function App() {
  const [quizMode, setQuizMode] = useState('menu')
  const [score, setScore] = useState(0)
  const isAth = false
  return (
    <div className="App">
      <Context.Provider value={{ quizMode, setQuizMode, score, setScore }}>
        <ToastContainer />
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Main />} >
              <Route path='createquiz' element={<CreateQuiz />} />
              <Route path='quiz' element={<Quizpage />} />
              <Route path='user' element={<User />} />
              <Route path='user' element={<ProtectedRoutes isAth={isAth} children={<User />} />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
