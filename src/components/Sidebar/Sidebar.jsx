import './Sidebar.scss';
import Logo from '../../assets/imgs/logo.png'
import { BsPerson } from 'react-icons/bs';
import { MdDashboard, MdQuiz, MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { signOut } from 'firebase/auth';
import { useEffect } from 'react';

const Sidebar = () => {

    let name = localStorage.getItem('name')
    let img = localStorage.getItem('img')
    let email = localStorage.getItem('email')
    const logOut = async () => {
        await signOut(auth).then(() => {
            localStorage.clear()
        })
    }

    return (
        <div className='sidebar' >
            <div className="wrapper">
                <div className="main">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <span className='name'>Edu</span>
                </div>
                <hr />
                <ul>
                    <li><Link className='link' to='/user'> <BsPerson className='icon' /> User</Link></li>
                    <li><Link className='link' to='/'> <MdDashboard className='icon' /> Dashboard</Link></li>
                    <li><Link className='link' to='/quiz'> <MdQuiz className='icon' /> Quiz</Link></li>
                    <li><span className='link' onClick={logOut}><MdLogout />Log out</span></li>
                </ul>
                <hr />
                <div className="user-info">
                    <img src={img ? img : 'https://icon-library.com/images/person-image-icon/person-image-icon-17.jpg'} alt="user img" />
                    <span>{name ? name : ''}</span>
                    <span>{email ? email : null}</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar