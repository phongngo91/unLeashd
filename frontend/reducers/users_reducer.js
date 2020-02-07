import {
    RECEIVE_CURRENT_USER
} from "../actions/session_actions";

const defaultState = {};

const usersReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const newItem = {
                [action.currentUser.id]: {
                    id: action.currentUser.id,
                    username: action.currentUser.username
                }
            };
            return Object.assign({}, state, newItem);
        default:
            return state;
    }
};

export default usersReducer;