import { db } from '../../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';

import "./User.scss"
// .docs.map(doc => ({ ...doc.data() }))
const User = () => {
    const userRef = collection(db, 'users');
    const [data, setData] = useState([]);
    const [user, setUser] = useState({})
    const getData = async () => {
        try {
            const data = await getDocs(userRef);
            setData(data.docs.map((doc) => ({ ...doc.data() })));
        } catch (err) {
            console.log(err);
        }
    }
    getData()
    function getUser(email) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].regEmail === email) {
                return setUser(data[i]);
            }
        }
    }
    getUser()
    return (
        <div className='user'>
            <div className="wrapper">
                <div className="user-img">
                    <img src={user.img || 'https://icon-library.com/images/person-image-icon/person-image-icon-17.jpg'} alt="user-img" />
                </div>
                <div className='user-info'>{user.regEmail}</div>
            </div>
        </div>
    )
}

export default User