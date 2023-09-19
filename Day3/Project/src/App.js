import {Routes , Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
      );
}

export default App;