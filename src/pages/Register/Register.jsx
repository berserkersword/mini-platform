import { useState } from 'react'
import { signInWithGoogle, auth, db } from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { BsPerson, BsInstagram, BsFacebook, BsTwitter, BsChevronDoubleRight } from 'react-icons/bs';
import { BiLockOpen } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify'
import './Register.scss';
const Register = () => {
    //      States
    const [regEmail, setRegEmail] = useState('')
    const [regPassword, setRegPassword] = useState('')
    const img = null;
    const username = null;
    const upgrgrade = false;
    const tests = {};
    //    Functions
    const register = async (e) => {
        const collectionRef = collection(db, 'users');
        e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(auth, regEmail, regPassword)
            const minUser = await addDoc(collectionRef, {
                regEmail,
                regPassword,
                uuid: user.user.uid,
                img,
                username,
                upgrgrade,
                tests,
                isAdmin: false
            });
            console.log(minUser);
            localStorage.setItem('email', user.user.email);
            toast.success('you are successfuly registered');
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className="login-container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            <BsPerson className='login_icon' />
                            <input type="text" className="login__input" placeholder="User name / Email" onChange={(e) => setRegEmail(e.target.value)} />
                        </div>
                        <div className="login__field">
                            <BiLockOpen className='login_icon' />
                            <input type="password" className="login__input" placeholder="Password" onChange={(e) => setRegPassword(e.target.value)} />
                        </div>
                        <button className="button login__submit" onClick={register}>
                            <span className="button__text">Log In Now</span>
                            <BsChevronDoubleRight className='button_icon' />
                        </button>
                        <div onClick={signInWithGoogle} className="google-button">
                            <FcGoogle /> <span>Contoniu With Google</span>
                        </div>
                    </form>
                    <div className="social-login">
                        <h3>log in via</h3>
                        <div className="social-icons">
                            <a href="https://instagram.com" className="social-login__icon"><BsInstagram /></a>
                            <a href="https://facebook.com" className="social-login__icon "><BsFacebook /></a>
                            <a href="https://twitter.coms" className="social-login__icon "><BsTwitter /></a>
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

export default Register