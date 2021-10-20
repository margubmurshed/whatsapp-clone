import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ChatItem.css';
import { useEffect, useState } from 'react';
import { FirebaseDB } from '../../../Firebase';


const ChatItem = ({ uid }) => {
    const [name, setName] = useState('');
    const [photoURL, setphotoURL] = useState('');
    const { messages, user } = useSelector(({ messages, user }) => ({ messages, user }));

    useEffect(() => {
        async function getUserInformation() {
            const doc = await FirebaseDB.collection('users').doc(uid).get();
            const { displayName, photoURL } = doc.data();
            setName(displayName);
            setphotoURL(photoURL);
        }
        getUserInformation()
    }, [uid]);

    const chatItemMessages = messages.length ? messages.filter(({ sender, receiver }) => {
        if (user.uid === uid) return sender === receiver;
        else return ((sender === uid || sender === user.uid) && (receiver === uid || receiver === user.uid)) && (sender !== receiver)
    }) : [];
    const lastMessage = chatItemMessages.length ? chatItemMessages.sort((a, b) => b.time - a.time)[0].message : '';
    if (!lastMessage) return null;

    return (
        <Link to={`/chats/${uid}`} className="transition-all">
            <div className="chatitem-container">
                <img src={photoURL || "https://via.placeholder.com/500"} alt="avater" />
                <div className="chatitem-text">
                    <p>{name}</p>
                    <p>{lastMessage}</p>
                </div>
            </div>
        </Link>
    )
}

export default ChatItem;
