import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FirebaseDB } from '../../../../Firebase';
import sendIcon from '../../../../data/send.png';
import './Messages-footer.css';

const MessagesFooter = () => {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { user, activeRoomID } = useSelector(({ user, activeRoomID }) => ({ user, activeRoomID }));
    const submitHandler = async e => {
        e.preventDefault();
        if (!activeRoomID || !message) return;
        const messageDetails = {
            sender: user.uid,
            receiver: activeRoomID,
            message,
            time: new Date().getTime()
        }
        setLoading(true);
        await FirebaseDB.collection('rooms').doc(user.uid).collection('messages').add(messageDetails);
        if (user.uid !== activeRoomID) {
            await FirebaseDB.collection('rooms').doc(activeRoomID).collection('messages').add(messageDetails);
        }
        setLoading(false);
        setMessage('')
    }

    return (
        <div className="messages-footer-container">
            <form onSubmit={submitHandler} className="flex justify-between items-center gap-3">
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Type a message..." />
                <button type="submit" disabled={loading}>Send</button>
                <img src={sendIcon} alt="sendIcon" width="30px" height="auto" className="cursor-pointer" onClick={submitHandler} />
            </form>
        </div>
    )
}

export default MessagesFooter
