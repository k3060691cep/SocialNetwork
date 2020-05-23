import React from "react";
import profile from "../profile/Profile.module.css";
import ProfileInfo from "./profileInfo/ProfileInfo.jsx";
import MyPostContainer from "./posts/MyPostContainer";
import {Redirect} from "react-router-dom";

const Profile = (props) => {

    return (
        <div className={profile.profile_container}>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    );
};

export default Profile;
