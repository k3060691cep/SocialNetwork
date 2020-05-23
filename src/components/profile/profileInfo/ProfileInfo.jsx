import React from "react";
import profile from "../profileInfo/ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import userPhoto from "../../../aseds/img/users.png";
import ProfileStatus from  "./ProfileStatus"

const ProfileInfo = props => {
    if (!props.profile) {
        return <Preloader/>
    }
    const contacts = Object.values(props.profile.contacts);
    let contactsInfo = contacts.map(c =>  <li className={profile.contact}> {c} </li> );
    let profileImg = props.profile.photos.large;
    let getProfileImg = () => {
        if(!props.profile.photos.large){

        }
    }


    return (
        <div className={profile.profile}>
            <div className={profile.profileItem}>

                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} className={profile.photo}/>
            <div className={profile.info}>
                <ProfileStatus />
                <div className={profile.name}>Name: {props.profile.fullName}</div>
                <div className={profile.aboutMe}>AboutMe: {props.profile.aboutMe}</div>
                <div className={profile.lookingForAJobDescription}>LookingJob: {props.profile.lookingForAJobDescription}</div>
                <div className={profile.contacts}>{contactsInfo}</div>

            </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
