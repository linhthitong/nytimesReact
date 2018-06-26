// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Saved from "./pages/Saved";

import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navigation";

const App = () => (
  <Router>
    <div>
    <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/saved" component={Saved} />
      </Wrapper>
    </div>
  </Router>
);

export default App;





