import React from "react";
import { useState } from 'react'
//components
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'
//default form state
const initialState = {
  username: "",
  password: ""
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const {push} = useHistory()
  //states
  const [credentials, setCredentials] = useState(initialState)

  //helper functions
  const handleChange = (e) => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
  };

  const login = (e) => {
    // (username === 'Lambda School' && password === 'i<3Lambd4')
    e.preventDefault();

    //login are usually a post request
    axiosWithAuth() //having the headers being undefine is ok because it's not use
      .post("/api/login", credentials) //server needs to be listening on port :5000 for it to work. Npm start it on vs code, see server code on github: https://github.com/LambdaSchool/gasoline-server
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        push("/bubble");
      })
      .catch((err) => {
        console.log("In axios error- " + err);
      });
  };
  return (
    <>
      <form onSubmit={login}>
          <input
            placeholder='Username'
            type="textarea"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            placeholder='Password'
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button type="submit">Log in</button>
        </form>
    </>
  );
};

export default Login;
