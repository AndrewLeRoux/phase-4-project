import React, {useState} from "react";


function Favorite({favorite, tags, onFavoriteDelete}) {


    function removeFromFavorites() {
        
        fetch(`/favorites/${favorite.id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then((deletedFavorite) => onFavoriteDelete(deletedFavorite));
        
    }

    
    
    return (
        <div className="card">
            <img src = {favorite.post.image_url} alt="post image" width = "200px" height = "200px"></img>
                <p className = "postName">{favorite.post.name}</p>
                <p>{favorite.post.description}</p>
                <p>Tag: {favorite.post.tag.name}</p>
                <p>Creator: {favorite.post.user.username}</p>
                <p>Contact information: {favorite.post.user.phone_number}</p>
                <button onClick = {removeFromFavorites}>remove from favorite</button>
        </div>
        
    )
}

export default Favorite;