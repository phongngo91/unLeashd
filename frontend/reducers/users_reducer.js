import {
    RECEIVE_CURRENT_USER
} from "../actions/session_actions";

import { RECEIVE_DOG } from "../actions/dog_actions";


import { RECEIVE_SINGLE_USER } from "../actions/users_actions";

const defaultState = {};

const usersReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const newCurrentUser = {
                [action.currentUser.id]: {
                    id: action.currentUser.id,
                    username: action.currentUser.username,
                    first_name: action.currentUser.first_name,
                    last_name: action.currentUser.last_name,
                    image_url: action.currentUser.image_url,
                    authored_dogs: action.currentUser.authored_dogs,
                    checkin_ids: action.currentUser.checkin_ids
                }
            };
            return Object.assign({}, state, newCurrentUser);
        case RECEIVE_SINGLE_USER: 
        const newSingleUser = {
            [action.singleUser.id]: {
                id: action.singleUser.id,
                username: action.singleUser.username,
                first_name: action.singleUser.first_name,
                last_name: action.singleUser.last_name,
                image_url: action.singleUser.image_url,
                authored_dogs: action.singleUser.authored_dogs,
                checkin_ids: action.singleUser.checkin_ids,
                friend_ids: action.singleUser.friend_ids
            }
        };
        return Object.assign({}, state, newSingleUser);
        case RECEIVE_DOG:
            const author = Object.values(action.dog)[0].author;
            const newDogOwner = {
                [author.id]:{
                    id: author.id,
                    username: author.username,
                    first_name: author.first_name,
                    last_name: author.last_name
                }
            };
        return Object.assign({}, state, newDogOwner);

        default:
            return state;
    }
};

export default usersReducer;