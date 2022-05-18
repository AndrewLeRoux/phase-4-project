import React, {useState} from "react";
import Post from "./Post";
import Tag from "./Tag";

function MyPosts({posts, user, favorites, onAddFavorite, onPostDelete, onPostUpdate}) {

  return (
    <div>
      {posts.filter(post => (post.user_id === user.id)).map((post) =>{ return <Post key = {post.id} post={post} user= {user} favorites={favorites} onAddFavorite={onAddFavorite} onPostDelete={onPostDelete} onPostUpdate={onPostUpdate}/>})}
    </div>
  )
}


export default MyPosts;