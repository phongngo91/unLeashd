import { combineReducers } from "redux";
import sessionErrorsReducer from './session_errors_reducer';
import dogErrorsReducer from './dog_errors_reducer';
import checkinErrorsReducer from './checkin_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    dog: dogErrorsReducer,
    checkin: checkinErrorsReducer
});

export default errorsReducer;