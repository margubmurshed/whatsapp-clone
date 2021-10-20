import { useSelector } from "react-redux";

const MessageItem = ({ message }) => {
    const user = useSelector(({ user }) => user);
    return (
        <p className={`${message.sender === user.uid ? "message-item message-item-user" : "message-item"} transition-all`}>
            {message.message} <span>{new Date(message.time).toLocaleTimeString()}</span>
        </p>
    )
}

export default MessageItem;
