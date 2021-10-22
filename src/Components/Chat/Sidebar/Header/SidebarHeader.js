import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FirebaseAuth } from '../../../../Firebase';
import './SidebarHeader.css';

const SidebarHeader = ({ searchText, setSearchText }) => {
    const user = useSelector(({ user }) => user);
    return (
        <>
            <div className="col-lg-12 sidebar-header-container">
                <div className="flex items-center">
                    <img src={user.photoURL} alt="userlogo" />
                    <p>{user.displayName}</p>
                </div>
                <button onClick={() => FirebaseAuth.signOut()}>
                    <i className="fas fa-sign-out-alt text-xl text-red-500"></i>
                </button>
            </div>
            <div className="col-lg-12 sidebar-header-searchbar">
                <div className="sidebar-header-searchbar-main">
                    <FontAwesomeIcon icon={faSearch} />
                    <input
                        type="text"
                        placeholder='Search people by Email'
                        onChange={e => setSearchText(e.target.value)}
                        value={searchText}
                    />
                </div>
            </div>
        </>
    )
}

export default SidebarHeader;
