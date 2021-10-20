import React from 'react';
import './ResultItem.css';

const ResultItem = ({ user }) => {
    const { email, displayName, photoURL } = user;
    return (
        <div className="chatitem-container">
            <img src={photoURL} alt="avater" />
            <div className="chatitem-text">
                <p>{displayName}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default ResultItem
