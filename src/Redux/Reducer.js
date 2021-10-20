import * as ActionTypes from '../Redux/ActionTypes';

const INITIAL_STATE = {
    user: null,
    activeRoomID: '',
    messages: []
}

const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.setUser:
            return {
                ...state,
                user: action.payload
            }

        case ActionTypes.fetchMessages:
            return {
                ...state,
                messages: action.payload
            }

        case ActionTypes.setActiveRoomID:
            return {
                ...state,
                activeRoomID: action.payload
            }

        default: return state;
    }
}

export default Reducer;