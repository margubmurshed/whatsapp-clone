import './Chat.css';
import SideBar from './Sidebar/Sidebar';
import Messages from './Messages/Messages';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Illustration from '../../data/whatsappIllustration.png';

const Chat = () => {
    const activeRoomID = useSelector(({ activeRoomID }) => activeRoomID);
    return (
        <div className="chat-container flex-col md:flex-row">
            <SideBar />
            <Route path="/chats/:roomid" exact>
                <Messages />
            </Route>
            <Route >
                <div className={`hidden h-full justify-end ${activeRoomID ? "" : "md:flex"}`} style={{ flex: '0.65' }}>
                    <img src={Illustration} alt="whatsapp illustation" className="w-auto h-screen" />
                </div>
            </Route>
        </div>
    )
}

export default Chat;
