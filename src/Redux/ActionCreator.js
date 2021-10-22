import { FirebaseDB } from '../Firebase';
import * as ActionTypes from './ActionTypes';

export const setUser = user => {
    return {
        type: ActionTypes.setUser,
        payload: user
    }
}

export const addUser = user => {
    const { displayName, email, photoURL } = user;
    const data = {
        displayName,
        email,
        photoURL,
        creationTime: new Date().getTime()
    }
    return FirebaseDB.collection("users").doc(user.uid).set(data);
}

export const fetchMessages = (user) => {
    return dispatch => {
        FirebaseDB.collection('rooms').doc(user.uid).collection('messages').onSnapshot(snapshot => {
            const messages = [];
            snapshot.forEach(doc => {
                messages.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            dispatch({
                type: ActionTypes.fetchMessages,
                payload: messages
            })
        })
    }
}

export const setActiveRoomID = roomid => {
    return {
        type: ActionTypes.setActiveRoomID,
        payload: roomid
    }
}