import React, { Fragment, useState, useEffect } from 'react';
import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

//components
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //Toggles between true/false and is passed to each component
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth(){
    try {

      const response = await fetch('http://localhost:3000/auth/is-verify', {
        method: 'GET',
        //Pass in token and where it's saved; trying to GET from the middleware the token saved
        headers: {token: localStorage.token}
      })

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
      
    } catch (err) {
        console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth()
  },[])

  return (
    <Fragment>
      <Router>
        <div className="container">
          <Routes>
            {/* anytime you pass props to a component, you don't want it to remount, so 'element' helps in this type of situation */}
            {/* if not authenticated with login credentials than send to login, else if authenticated than send to dashboard */}
            <Route exact path="/login" element={ !isAuthenticated ? (<Login setAuth={setAuth}/>) : (<Navigate to="/dashboard"/>)} />
            {/* if not registered in database than send to register, else if registered than send to dashboard */}
            <Route exact path="/register" element={!isAuthenticated ? (<Register setAuth={setAuth}/>) : <Navigate to="/dashboard"/>}/>
            {/* if authenticated with login credentials than send to dashboard, else if not than send to login */}
            <Route exact path="/dashboard" element={isAuthenticated ? (<Dashboard setAuth={setAuth}/>) : ( <Navigate to="/login"/>)}/>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
