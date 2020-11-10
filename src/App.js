import React, { Component } from 'react'
import './App.css';
import CludoBoard from "./CludoBoard.jsx";
import { Router } from "@reach/router";
import Kitchen from "./kitchen.jsx";import Recipe from './recipe'

class App extends Component {
  //state = { username: "jessjelly" };

  render() {
    
    return (
        <Router>
          <CludoBoard path="/home" />
          <Kitchen path="/kitchen" />
          <Recipe path="/recipe-finder" />
         
          
        </Router>
     
    );
  }
}


export default App;
