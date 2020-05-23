import React from "react";
import post from "../posts/Post.module.css";



const PostItem = (props) => {
    return (
        <div className={post.pos}>{props.post}</div>
    )
};

const Post = (props) => {
    let postItem = props.postData.map(addPost => <PostItem post={addPost.post} id={addPost.id}/>);
    return (
        <div className={post.psotItem}>
            {postItem}
        </div>
    );
};

export default Post;
