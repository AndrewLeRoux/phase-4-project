import React from "react";
import { useHistory } from "react-router-dom";


function Post({post, user, favorites, onAddFavorite, onPostDelete, onPostUpdate}) {

    let history = useHistory();

    let myPost = false


    if (post.user_id === user.id){
        myPost = true
    }


    function addToFavorites () {
        if (favorites.find(favorite => favorite.post_id === post.id && favorite.user_id === user.id)) {
            alert("already in favorites")
         }
         else {
            fetch("/favorites", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    post_id: post.id,
                    user_id: user.id
                    
                }),
            })
            .then((r) => r.json())
            .then((newFavorite) => onAddFavorite(newFavorite));    
         }
            
    }

    function deletePost() {
        fetch(`/posts/${post.id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then((deletedPost) => onPostDelete(deletedPost));
    }

    function updatePost() {
        onPostUpdate(post)
        history.push("/update_post");
    }


    

    return (
        <div className="card">
            <img src = {post.image_url} alt="post" width = "200px" height = "200px"></img>
            <p className = "postName">{post.name}</p>
            <p>{post.description}</p>
            <p>Tag: {post.tag.name}</p>
            <p>Creator: {post.user.username}</p>
            <p>Contact information: {post.user.phone_number}</p>
            <button onClick = {addToFavorites}>favorite</button>
            {myPost? 
            <>
            <button onClick = {deletePost}>delete post</button>
            <button onClick = {updatePost}>update post</button>
            </>
            : 
            ''}
        </div>
        
    )
}

export default Post;