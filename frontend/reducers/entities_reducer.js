import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import petShopsReducer from './pet_shops_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    pet_shops: petShopsReducer
});

export default entitiesReducer;