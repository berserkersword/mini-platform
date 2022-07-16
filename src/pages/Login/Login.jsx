import { useState } from 'react'
// FireBase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
// icons
import { BsPerson, BsInstagram, BsFacebook, BsTwitter, BsChevronDoubleRight } from 'react-icons/bs';
import { BiLockOpen } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc'
// Style
import './Login.scss';
import { toast } from 'react-toastify'
const Login = () => {
    //      States
    const [logPassword, setLogPassword] = useState('')
    const [logEmail, setLogEmail] = useState('')

    //    Functions
    const login = async (e) => {
        e.preventDefault()

        try {
            let user = await signInWithEmailAndPassword(auth, logEmail, logPassword);
            localStorage.setItem('email', user.user.email)
            localStorage.setItem('name', user.user.displayName);
            localStorage.setItem('isAth', true);
            localStorage.setItem('userID', user.user.uid);
            toast.success('You are login successfully');
        } catch (err) {
            toast.error(err.message)
        }
    }

    return (
        <div className="login-container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            <BsPerson className='login_icon' />
                            <input type="text" className="login__input" placeholder="User name / Email" onChange={(e) => setLogEmail(e.target.value)} />
                        </div>
                        <div className="login__field">
                            <BiLockOpen className='login_icon' />
                            <input type="password" className="login__input" placeholder="Password" onChange={(e) => setLogPassword(e.target.value)} />
                        </div>
                        <button className="button login__submit" onClick={login}>
                            <span className="button__text">Log In Now</span>
                            <BsChevronDoubleRight className='button_icon' />
                        </button>
                    </form>
                    <div className="social-login">
                        <h3>log in via</h3>
                        <div className="social-icons">
                            <a href="https://instagram.com" className="social-login__icon"><BsInstagram /></a>
                            <a href="https://facebook.com" className="social-login__icon "><BsFacebook /></a>
                            <a href="https://twitter.com" className="social-login__icon "><BsTwitter /></a>
                        </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    )
}

export default Login