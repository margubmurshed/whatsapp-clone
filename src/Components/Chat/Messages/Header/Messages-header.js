import { useSelector } from 'react-redux';
import './Messages-header.css';
import date from 'date-and-time';
import backArrow from '../../../../data/arrow.png';
import { Link } from 'react-router-dom';

const MessagesHeader = ({ userData }) => {
    const messages = useSelector(({ messages }) => messages);
    const { displayName, photoURL, uid } = userData;
    const lastMessage = messages.filter(message => message.sender === uid).sort((a, b) => b.time - a.time)[0];
    return (
        <div className="messages-header-container">
            <Link to="/">
                <img src={backArrow} alt="backArrow" width="20px" className="cursor-pointer md:hidden backIcon" />
            </Link>
            <div className="flex">
                <img src={photoURL} alt="avater" className="userImage" />
                <div className="messages-header-text">
                    <p>{displayName}</p>
                    {lastMessage && <p>{`last seen ${date.format(new Date(lastMessage.time), 'DD MMM YYYY')}`}</p>}
                </div>
            </div>
        </div>
    )
}

export default MessagesHeader;
