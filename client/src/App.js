import React, { Fragment } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';

//components
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Fragment>
      <Router>
        <div className="container">
          <Routes>
            {/* anytime you pass props to a component, you don't want it to remount, so 'render' helps in this type of situation */}
            <Route exact path="/login" element={ <Login />} />
            <Route exact path="/register" element={ <Register /> } />
            <Route exact path="/dashboard" element={ <Dashboard /> } />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
