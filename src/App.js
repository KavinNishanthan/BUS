import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/register";
import LoginPage from "./components/login";
import Dashboard from "./components/Dashboard";
import { Cookies } from "react-cookie";
// import express from 'express';
// app = express()

const cookie = new Cookies()
class App extends Component {
  state = {
    token: cookie.get("hello@gmail.com")
  }
  render() {
    return (
      <BrowserRouter>
        <Routes >
          <Route path="/login" element={this.state.token ? <Navbar /> : <LoginPage />} />
          <Route exact path="/" element={this.state.token ? <Navbar /> : <LoginPage />} />
          <Route path="/register" element={this.state.token ? <Navbar /> : <Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;