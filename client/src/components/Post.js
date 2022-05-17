import React from "react";


function Post({post, user, onAddFavorite}) {

    function addToFavorites () {
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

    

    return (
        <div className="card">
            <img src = {post.image_url} alt="post image" width = "200px" height = "200px"></img>
                <p className = "postName">{post.name}</p>
                <p>{post.description}</p>
                <p>Tag: {post.tag.name}</p>
                <button onClick = {addToFavorites}>favorite</button>
        </div>
        
    )
}

export default Post;