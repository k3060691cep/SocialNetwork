import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPost from "./MyPost";
import {connect} from 'react-redux'

let mapStateToProps = (state)=> {

    return{
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))},
        addPost: () => {dispatch(addPostActionCreator())},
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost);

export default MyPostContainer;




// const MyPostContainer = (props) => {
//     debugger;
//   let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//   };
//
//   let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreator(text);
//         props.store.dispatch(action);
//   };
//
//   return (
//    <MyPost updateNewPostText={onPostChange}
//            addPost={addPost}
//            postData={props.store.getState().profilePage.postData}
//            newPostText={props.store.getState().profilePage.newPostText}/>
//   );
// };










//
// import React from "react";
// import profile from "../profile/MyPostContainer.module.css";
//
// import ProfileInfo from "./profileInfo/ProfileInfo.jsx";
// import Post from "./posts/Post.jsx";
// import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profile-reducer.js'
//
// // export const addPostActionCreator = () => {
// //   return {
// //     type: "ADD-POST"
// //   }
// // }
//
// // export const updateNewPosTextActionCreator = (text) => {
// //   return {
// //     type: "UPDATE-NEW-POST-TEXT",
// //     newText: text
// //   }
// // }
//
// const Profile = props => {
//     let newPostElement = React.createRef();
//
//     let addPost = () => {
//         // props.addPost ();
//         props.dispatch(addPostActionCreator());
//     };
//
//     let onPostChange = () => {
//         let text = newPostElement.current.value;
//         // props.updateNewPostTextActionCreator(text);
//         props.dispatch(updateNewPostTextActionCreator(text));
//     };
//     return (
//         <div className={profile.profile}>
//             <ProfileInfo />
//             <div className={profile.textarea}>
//         <textarea
//             onChange={onPostChange}
//             ref={newPostElement}
//             className={profile.textareaItem}
//             value={props.newPostText}
//         ></textarea>
//                 <button onClick={addPost}>send</button>
//             </div>
//             <Post dispatch={props.dispatch} postData={props.postData} />
//         </div>
//     );
// };
//
// export default Profile;
//
//
// import React from "react";
// import profile from "./MyPostContainer.module.css";
// import Post from "./Post.jsx";
// import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// const MyPostContainer = (props) => {
//     let newPostElement = React.createRef();
//
//     let addPost = () => {
//         // props.addPost ();
//         props.dispatch(addPostActionCreator());
//     };
//
//     let onPostChange = () => {
//         let text = newPostElement.current.value;
//         // props.updateNewPostTextActionCreator(text);
//         props.dispatch(updateNewPostTextActionCreator(text));
//     };
//
//     return (
//         <div className={profile.profile}>
//
//             <div className={profile.textarea}>
//         <textarea
//             onChange={onPostChange}
//             ref={newPostElement}
//             className={profile.textareaItem}
//             value={props.newPostText}
//         />
//                 <button onClick={addPost}>send</button>
//             </div>
//             <Post dispatch={props.dispatch} postData={props.postData}/>
//         </div>
//     );
// };
//
// export default MyPostContainer;