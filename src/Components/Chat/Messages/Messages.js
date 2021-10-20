import React, { useEffect, useState } from 'react';
import Header from './Header/Messages-header';
import Body from './Body/Messages-body';
import Footer from './Footer/Messages-footer';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveRoomID } from '../../../Redux/ActionCreator';
import './Messages.css';
import { FirebaseDB } from '../../../Firebase';
import Loader from '../../loader/loader';

const Messages = () => {
    const dispatch = useDispatch();
    const { roomid } = useParams();
    dispatch(setActiveRoomID(roomid))
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        document.title = "Message | WhatsApp"
        const getUser = async uid => {
            const doc = await FirebaseDB.collection("users").doc(uid).get();
            setUserData({
                uid: doc.id,
                ...doc.data()
            });
        }
        getUser(roomid);
    }, [roomid])

    if (!userData) return <div className="messages-container h-screen flex justify-center items-center bg-gray-100"><Loader /></div>
    return (
        <div className="messages-container overflow-y-auto">
            <Header userData={userData} />
            <Body userData={userData} />
            <Footer userData={userData} />
        </div>
    )
}

export default Messages;
