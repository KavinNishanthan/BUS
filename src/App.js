import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Signup from "./components/Singup/Signupp";
import Login from "./components/Login/Login";
import { Routes,Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Navbar/>}/>
        </Routes>
        
      </div>
    );
  }
}

export default App;