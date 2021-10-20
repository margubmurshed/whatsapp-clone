import { useState } from 'react';
import './Sidebar.css';
import Header from './Header/SidebarHeader';
import Body from './Body/SidebarBody';
import SidebarResults from './SearchResult/SidebarResults';

const Sidebar = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <div className="sidebar-container">
            <Header searchText={searchText} setSearchText={setSearchText} />
            {
                searchText.length
                    ? <SidebarResults searchText={searchText} />
                    : <Body />
            }
        </div>
    )
}

export default Sidebar;
