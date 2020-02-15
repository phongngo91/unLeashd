import {
    RECEIVE_CURRENT_USER
} from "../actions/session_actions";

import { RECEIVE_SINGLE_USER } from "../actions/users_actions";

const defaultState = {};

const usersReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const CurrentdogIds = action.currentUser.authored_dog_breeds.map((dog) => {
                return dog.id;
            });

            const newCurrentUser = {
                [action.currentUser.id]: {
                    id: action.currentUser.id,
                    username: action.currentUser.username,
                    first_name: action.currentUser.first_name,
                    last_name: action.currentUser.last_name,
                    authored_dogs: CurrentdogIds
                    // image_url: action.CurrentUser.image_url
                }
            };
            return Object.assign({}, state, newCurrentUser);
        case RECEIVE_SINGLE_USER: 
        // debugger
        const dogIds = action.singleUser.authored_dog_breeds.map((dog) => {
            return dog.id;
        });
        const newSingleUser = {
            [action.singleUser.id]: {
                id: action.singleUser.id,
                username: action.singleUser.username,
                authored_dogs: dogIds
                // image_url: action.singleUser.image_url
            }
        };
        return Object.assign({}, state, newSingleUser);
        default:
            return state;
    }
};

export default usersReducer;