import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import petShopsReducer from './pet_shops_reducer';
import dogsReducer from './dogs_reducer';
import checkinsReducer from './checkins_reducer';
import searchedUsersReducer from './searched_users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    pet_shops: petShopsReducer,
    dogs: dogsReducer,
    checkins: checkinsReducer,
    searchedUsers: searchedUsersReducer
});

export default entitiesReducer;