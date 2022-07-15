import React from "react";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Videocall from './components/Videocall';
import About from './components/About';

import {
  BrowserRouter as Router, Routes, Route, useNavigate
} from "react-router-dom";
import { VideoCall } from "@material-ui/icons";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Videocall' element={<Videocall />} />
          <Route path='/Login' exact element={<Login/>}></Route>
          <Route path='/Signup' exace element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;