import React from "react"
import Post from "./Post";

function Favorites({user}) {
    

      return (
        <div>
          {user.favorited_posts.map((post) =>{ return <Post key = {post.id} post={post}/>})}
        </div>
       
          )
}


export default Favorites;