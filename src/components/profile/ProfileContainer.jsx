import React from "react";
import profile from "../profile/Profile.module.css";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {userAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/AuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 7082;
        }
        this.props.getUserProfile(userId)


    }

    render() {
        // if(!this.props.isAuth){
        //     return <Redirect to={"/login"}/>
        // };
        return (
            <div className={profile.profile}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});


let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);


// class ProfileContainer extends React.Component {
//     componentDidMount() {
//
//         let userId = this.props.match.params.userId;
//         if (!userId) {
//             userId = 7082;
//         }
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
//             .then(response => {
//                 this.props.setUserProfile(response.data);
//             });
//     }
//
//     render() {
//         return (
//             <div className={profile.profile}>
//                 <Profile {...this.props} profile={this.props.profile}/>
//             </div>
//         );
//     }
// }
//
// let mapStateToProps = (state) => ({
//     profile: state.profilePage.profile
// });
//
// let withUrlDataContainerComponent = withRouter(ProfileContainer);
//
// export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);


