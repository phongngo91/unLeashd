import {
    RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS
} from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            const newArr = state.slice();
                return newArr.concat(action.errors);
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;
