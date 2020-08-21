'https://github.com/royeradames/web-sprint-challenge-advanced-web-applications.git'
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import components
import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/bubble">Bubble</Link>
          </li>
        </ul>
        <Route exact path="/" >
          <Login />
        </Route>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
      <Route>
        <PrivateRoute path='/bubble'>
          <BubblePage />
        </PrivateRoute>
      </Route>
    </Router>
  );
}

export default App;
