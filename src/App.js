import React, { useState, useEffect } from 'react';
import Login from './Components/Login';
import Content from './Components/Content';

function IsLoggedIn() {
  return window.localStorage['type'] !== undefined
}

function App() {

  const [IsLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(IsLoggedIn());
  }, []);

  return (
    <div className="App">
      {IsLogged === true ?
        <Content />
        :
        <Login />
      }
    </div>
  );
}

export default App;
