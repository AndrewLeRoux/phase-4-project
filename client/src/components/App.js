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
import styled from 'styled-components';

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

  
  useEffect(() => {
    async function getPosts() {
      const r = await fetch("/posts")
      if (r.ok) {
        r.json().then((posts) => setPosts(posts))
      }
    }

    async function getTags() {
      const r = await fetch("/tags")
      if (r.ok) {
        r.json().then((tags) => setTags(tags))
      }
    }

    async function getFavorites() {
      const r = await fetch("/favorites")
      if (r.ok) {
        r.json().then((favorites) => setFavorites(favorites))
      }
    }

    getPosts();
    getFavorites();
    getTags();

  }, [user])


  function handleAddFavorite(newFavorite) {
    const updatedFavorites = [...favorites, newFavorite]
    setFavorites(updatedFavorites)
  }

  function handleFavoriteDelete(favoriteId) {
    const newFavorites = favorites.filter(favorite => !(favorite.id === favoriteId))
    setFavorites(newFavorites)
  }

  function handlePostDelete(postId) {
    const newPosts = posts.filter(post => !(post.id === postId))
    setPosts(newPosts)
  }

  function handlePostUpdate(post) {
    const newPost = post
    setUpdatingPost(newPost)
  }

  function handleAddPost(newPost){
    const newPosts = [...posts, newPost]
    setPosts(newPosts)
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
      <Title>AndysList</Title>
      <NavBar setUser={setUser} />
      <Switch>
        <Route exact path="/profile">
        <Profile user = {user}/>
        </Route>
        <Route exact path="/favorites">
        <Favorites user = {user} favorites = {favorites} tags = {tags} onFavoriteDelete={handleFavoriteDelete}/>
        </Route>
        <Route exact path="/create_post">
          <NewPost user={user} tags={tags} onAddPost={handleAddPost}/>
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

const Title = styled.h1`
    font-size: 30px;
    text-align: center;
`;


export default App;
