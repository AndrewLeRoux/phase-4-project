import React from "react";


function Favorite({favorite, tags, onFavoriteDelete}) {


    const post = favorite.post
    const tag = tags.find(tag => (post.tag_id == tag.id))

    function removeFromFavorites() {
        fetch(`/favorites/${favorite.id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then((deletedFavorite) => onFavoriteDelete(deletedFavorite));
    }

    
    
    return (
        <div className="card">
            <img src = {post.image_url} alt="post image" width = "200px" height = "200px"></img>
                <p className = "postName">{favorite.name}</p>
                <p>{post.description}</p>
                <p>Tag: {tag.name}</p>
                <button onClick = {removeFromFavorites}>remove from favorite</button>
        </div>
        
    )
}

export default Favorite;