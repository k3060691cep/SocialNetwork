import React from "react";
import profile from "./MyPost.module.css";
import Post from "./Post.jsx";

const MyPost = (props) => {
  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost();
  };
  let onPostChange = () => {

        let text = newPostElement.current.value;
        props.updateNewPostText(text);

  };
  let keycheck = (e) => {
      if (e.ctrlKey && e.keyCode == 13) {
            onAddPost();
      }
    };
  return (
      <div className={profile.profile}>

        <div className={profile.textarea}>
        <textarea
            onKeyDown={keycheck}
            onChange={onPostChange}
            ref={newPostElement}
            className={profile.textareaItem}
            value={props.newPostText}
        />
          <button className={profile.button} onClick={onAddPost}>Send</button>
        </div>
        <Post  postData={props.postData}/>
      </div>
  );
};
export default MyPost;










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