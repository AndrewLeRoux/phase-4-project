import '../App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import Favorites from './Favorites';
import Profile from './Profile';
import NewPost from './NewPost';
import Posts from './Posts';
import MyPosts from './MyPosts';
import UpdatePost from './UpdatePost';


function App() {

  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [tags, setTags] = useState([])
  const [favorites, setFavorites] = useState([])
  const [updatingPost, setUpdatingPost] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() =>{
    fetch("/posts")
    .then((r) => r.json())
    .then((posts) => setPosts(posts));


    fetch("/tags")
    .then((r) => r.json())
    .then((tags) => setTags(tags));

    fetch("/favorites")
    .then((r) => r.json())
    .then((favorites) => setFavorites(favorites));

  }, [])


  function handleAddFavorite(newFavorite) {
    const updatedFavorites = [...favorites, newFavorite]
    setFavorites(updatedFavorites)
  }

  function handleFavoriteDelete(deletedFavorite) {
    const newFavorites = favorites.filter(favorite => !(favorite.id == deletedFavorite.id))
    setFavorites(newFavorites)
  }

  function handlePostDelete(deletedPost) {
    const newPosts = posts.filter(post => !(post.id == deletedPost.id))
    setPosts(newPosts)
  }

  function handlePostUpdate(post) {
    const newPost = post
    setUpdatingPost(newPost)
  }

  function handleUpdatePost(newPost) {
      const updatedPosts = posts.map((post) => {
        if (post.id === newPost.id){
          return newPost
        }
        else {
            return post
          }
        })
      setPosts(updatedPosts)
  }


  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <h1>AndysList</h1>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/profile">
        <Profile user = {user}/>
        </Route>
        <Route exact path="/favorites">
        <Favorites user = {user} favorites = {favorites} tags = {tags} onFavoriteDelete={handleFavoriteDelete}/>
        </Route>
        <Route exact path="/create_post">
          <NewPost user={user} tags={tags}/>
        </Route>
        <Route exact path="/">
          <Posts posts = {posts} user={user} tags = {tags} favorites = {favorites} onAddFavorite={handleAddFavorite} onPostDelete={handlePostDelete} onPostUpdate={handlePostUpdate}/>
        </Route>
        <Route exact path="/my_posts">
          <MyPosts posts = {posts} user={user} favorites = {favorites} onAddFavorite={handleAddFavorite} onPostDelete={handlePostDelete} onPostUpdate={handlePostUpdate}/>
        </Route>
        <Route exact path="/update_post">
          <UpdatePost post = {updatingPost} tags={tags} user={user} onUpdatePost={handleUpdatePost}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
