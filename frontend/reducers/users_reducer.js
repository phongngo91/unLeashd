import {
    RECEIVE_CURRENT_USER
} from "../actions/session_actions";

import { RECEIVE_SINGLE_USER } from "../actions/users_actions";

const defaultState = {};

const usersReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const newCurrentUser = {
                [action.currentUser.id]: {
                    id: action.currentUser.id,
                    username: action.currentUser.username
                }
            };
            return Object.assign({}, state, newCurrentUser);
        case RECEIVE_SINGLE_USER: 
        const newSingleUser = {
            [action.singleUser.id]: {
                id: action.singleUser.id,
                username: action.singleUser.username
            }
        };
        return Object.assign({}, state, newSingleUser);
        default:
            return state;
    }
};

export default usersReducer;