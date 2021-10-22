import './Chat.css';
import SideBar from './Sidebar/Sidebar';
import Messages from './Messages/Messages';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Illustration from '../../data/noActiveRoomIllustration.jpg';

const Chat = () => {
    const activeRoomID = useSelector(({ activeRoomID }) => activeRoomID);
    return (
        <div className="chat-container flex-col md:flex-row">
            <SideBar />
            <Route path="/chats/:roomid" exact>
                <Messages />
            </Route>
            <Route>
                <div
                    className={`hidden h-full justify-end ${activeRoomID ? "" : "md:flex flex-col items-center justify-center gap-4 border-b-2 border-green-500"}`}
                    style={{ flex: '0.65', background: '#F8F9FA' }}
                >
                    <img src={Illustration} alt="whatsapp illustation" width="300px" />
                    <h3 className="text-4xl font-light">Keep your phone connected</h3>
                    <p className="font-extralight">WhatsApp connects to your phone to sync messages. <br /> To reduce data usage, connect your phone to Wi-Fi.</p>
                    <hr />
                </div>
            </Route>
        </div>
    )
}

export default Chat;
