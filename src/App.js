import React, { useState } from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/movies">
            <h1>Movie list</h1>
            <form onSubmit={onSubmit}>
              <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
              <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
              <button type="submit">Login</button>
            </form>
          </Route>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
