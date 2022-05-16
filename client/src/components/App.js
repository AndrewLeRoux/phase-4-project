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

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/profile">
        <Profile/>
        </Route>
        <Route exact path="/favorites">
        <Favorites/>
        </Route>
        <Route exact path="/create_post">
          <NewPost/>
        </Route>
        <Route exact path="/">
          <Posts/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
