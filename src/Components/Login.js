import React, { useState } from 'react'

export default function Login() {
  let users = [{
    userName: 'admin',
    type: 'Administrator',
    password: 1234
  },
  {
    userName: 'coord',
    type: 'Coordinator',
    password: 5678
  }];


  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const result = users.filter(res => (
        res.userName == user && res.password == password
      ));
      window.localStorage.type = result.map(res => (res.type));
      window.localStorage.userName = result.map(res => (res.userName));
      window.location = '/';
      setUser("")
      setPassword("")
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            <i class="fas fa-sign-in-alt" />
          </div>
          <input type="text" id="user" class="fadeIn second" onChange={(e) => setUser(e.target.value)} value={user} placeholder="User" />
          <input type="password" id="password" class="fadeIn third" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
          <input type="submit" class="fadeIn fourth btn-login" value="Login" />
        </div>
      </div>
    </form>
  )
}