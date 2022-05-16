import '../App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import Favorites from './Favorites';
import Profile from './Profile';
import NewPost from './NewPost';
import Posts from './Posts';


function App() {

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([])

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

  }, [])




  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/profile">
        <Profile user = {user}/>
        </Route>
        <Route exact path="/favorites">
        <Favorites user = {user}/>
        </Route>
        <Route exact path="/create_post">
          <NewPost/>
        </Route>
        <Route exact path="/">
          <Posts posts = {posts} user={user}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
