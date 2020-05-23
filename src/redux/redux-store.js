import {createStore, combineReducers, applyMiddleware} from 'redux'
import messengerReducer from './messenger-reducer.js'
import profileReducer from './profile-reducer.js'
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appsReducer from "./apps-reducer";
import  thunkMiddleware  from  "redux-thunk";

let reducer = combineReducers({
    profilePage: profileReducer,
    messengerPage: messengerReducer,
    userPage: usersReducer,
    auth: authReducer,
    apps: appsReducer,
});

let store = createStore(reducer, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;