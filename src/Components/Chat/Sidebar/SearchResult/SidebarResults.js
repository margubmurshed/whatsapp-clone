import React, { useEffect, useState } from 'react';
import './SidebarResults.css';
import ResultItem from '../SearchResult/ResultItem/ResultItem';
import { Link } from 'react-router-dom';
import { FirebaseDB } from '../../../../Firebase';

const SidebarResults = ({ searchText }) => {
    const [foundUsers, setFoundUsers] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            const snapshot = await FirebaseDB.collection("users").get();
            const array = [];
            snapshot.forEach(doc => {
                if (doc.data().email.includes(searchText)) {
                    array.push({
                        id: doc.id,
                        ...doc.data()
                    })
                }
            })
            setFoundUsers(array);
        }
        getUsers();
    }, [searchText])

    return (
        <div className="sidebar-body-container">
            <div className="p-5">
                <h3 className="text-xl font-medium">Search Results for "{searchText}"</h3>
            </div>
            {foundUsers ? foundUsers.map(user => (
                <Link to={`/chats/${user.id}`} key={user.id}>
                    <ResultItem user={user} />
                </Link>
            )) : <p className="no-message">Loading...</p>}
        </div>
    )
}

export default SidebarResults;
