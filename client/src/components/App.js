import '../App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar"


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
        
        </Route>
        <Route exact path="/favorites">
        
        </Route>
        <Route exact path="/activities">
          
        </Route>
        <Route exact path="/">
        
        </Route>
      </Switch>
    </div>
  );
}

export default App;
