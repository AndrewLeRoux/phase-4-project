import React from "react"
import Favorite from "./Favorite"

function Favorites({user, favorites, tags, onFavoriteDelete}) {

  const favoritesList = favorites.filter(favorite => (user.id === favorite.user_id))
  
      return (
        <div>
          {favoritesList.map((favorite) =>{ return <Favorite key = {favorite.id} favorite={favorite} tags={tags} onFavoriteDelete={onFavoriteDelete}/>})}
        </div>
       
          )
}


export default Favorites;