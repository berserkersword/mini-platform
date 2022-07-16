import './Main.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
// import { Sling as Hamburger } from 'hamburger-react';
const Main = () => {

    return (
        <div className='main-page'>
            <Sidebar />

            <div className="main-container">
                <Outlet />
            </div>
        </div>
    )
}

export default Main