import MessageItem from './MessageItem';
import { useSelector } from 'react-redux';
import './Messages-body.css';

const MessagesBody = ({ userData }) => {
    const { user, messages, activeRoomID } = useSelector(({ user, messages, activeRoomID }) => ({ user, messages, activeRoomID }));
    if (!userData) return 'Loading...';
    const { uid } = userData;

    const chatMessages = messages.filter(({ sender, receiver }) => {
        if (user.uid === activeRoomID) {
            return sender === receiver
        } else {
            return ((sender === uid || sender === user.uid) && (receiver === uid || receiver === user.uid)) && (sender !== receiver)
        }
    }).sort((a, b) => a.time - b.time);

    return (
        <div className="message-body-container">
            {
                chatMessages.length
                    ? chatMessages.map(message => <MessageItem message={message} key={Math.random()} />)
                    : 'Send Message To Start Conversion'
            }
        </div>
    )
}
export default MessagesBody;
