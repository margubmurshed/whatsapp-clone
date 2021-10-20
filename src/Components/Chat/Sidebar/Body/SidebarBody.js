import { useSelector } from 'react-redux';
import ChatItem from '../../ChatItem/ChatItem';
import './SidebarBody.css';

const SidebarBody = () => {
    const messages = useSelector(({ messages }) => messages);
    const messageIDs = [];
    messages.forEach(({ sender, receiver }) => {
        messageIDs.push(sender);
        messageIDs.push(receiver);
    })
    const chats = Array.from(new Set(messageIDs));
    return (
        <div className="sidebar-body-container">
            {
                chats.length
                    ? chats.map(uid => <ChatItem uid={uid} key={Math.random()} />)
                    : <p className="no-message">No Message Conversation</p>
            }
        </div>
    )
}

export default SidebarBody
