//создаем константу (она несет в себе имя action которое мы придумавыем сами);
//action-это обьект который приходит в бизнес с внешнего мира,
//dispatch анализирует этот action смотрит совпадение и если находит выполняет действия

import * as axios from "axios";
import {userAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"



let initialState = {
    postData: [
        {id: 1, post: "bla bla bla"},
        ],
    newPostText: "",
    profile: null,
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 1,
                post: state.newPostText
            };
            return {
                ...state,
                postData: [newPost, ...state.postData],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return  {...state, profile: action.profile};
        }
        default:
            return state;
    }
};
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile });
export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const setUser = () => {
    return (dispatch) => {

    }
}
export default profileReducer;
